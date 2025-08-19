"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const generative_ai_1 = require("@google/generative-ai");
const axios_1 = require("axios");
const metaEnum_1 = require("../common/enum/metaEnum");
const ad_copy_entity_1 = require("../common/entities/ad-copy.entity");
const ad_creative_entity_1 = require("../common/entities/ad-creative.entity");
let AiService = class AiService {
    constructor(configService, adCopyRepository, adCreativeRepository) {
        this.configService = configService;
        this.adCopyRepository = adCopyRepository;
        this.adCreativeRepository = adCreativeRepository;
        this.genAI = new generative_ai_1.GoogleGenerativeAI(this.configService.get('GEMINI_API_KEY'));
    }
    async generateAdCopy(userId, request) {
        const { productName, productDescription, targetAudience, adObjective, tone = 'professional', variations = 3 } = request;
        const prompt = `You are an expert Facebook ads copywriter. Create ${variations} compelling Facebook ad copy variations for:

Product: ${productName}
Description: ${productDescription}
Target Audience: ${targetAudience}
Ad Objective: ${adObjective}
Tone: ${tone}

For each variation, provide:
1. Headline (max 40 characters)
2. Primary Text (max 125 characters)
3. Description (max 30 characters)
4. Call-to-Action suggestion

IMPORTANT: Return ONLY a valid JSON array with objects containing: headline, primaryText, description, callToAction

Example format:
[
  {
    "headline": "Amazing Product Here",
    "primaryText": "Discover the best solution for your needs. Limited time offer!",
    "description": "Get yours today",
    "callToAction": "Shop Now"
  }
]`;
        try {
            const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const content = response.text();
            if (!content) {
                throw new common_1.BadRequestException('Failed to generate ad copy');
            }
            let jsonContent = content.trim();
            if (jsonContent.startsWith('```json')) {
                jsonContent = jsonContent.replace(/```json\n?/, '').replace(/\n?```$/, '');
            }
            if (jsonContent.startsWith('```')) {
                jsonContent = jsonContent.replace(/```\n?/, '').replace(/\n?```$/, '');
            }
            const adCopies = JSON.parse(jsonContent);
            if (!Array.isArray(adCopies)) {
                throw new common_1.BadRequestException('Invalid response format from AI');
            }
            const savedCopies = await Promise.all(adCopies.map(async (copy) => {
                const adCopy = this.adCopyRepository.create({
                    headline: copy.headline || 'Generated Headline',
                    primaryText: copy.primaryText || 'Generated primary text',
                    description: copy.description || 'Generated description',
                    callToAction: copy.callToAction || 'Learn More',
                    prompt,
                    aiModel: 'gemini-1.5-flash',
                    temperature: 0.8,
                    userId,
                });
                return this.adCopyRepository.save(adCopy);
            }));
            return savedCopies;
        }
        catch (error) {
            console.error('Error generating ad copy:', error);
            throw new common_1.BadRequestException('Failed to generate ad copy: ' + error.message);
        }
    }
    async generateAdImage(userId, request) {
        const { productName, productDescription, style = 'modern', aspectRatio = '1:1' } = request;
        const stabilityApiKey = this.configService.get('STABILITY_API_KEY');
        if (!stabilityApiKey) {
            throw new common_1.BadRequestException('Image generation is not available. To enable this feature, please:\n\n' +
                '1. Get a Stability AI API key from https://platform.stability.ai/\n' +
                '2. Add STABILITY_API_KEY to your server/.env file\n' +
                '3. Restart the server\n\n' +
                'Alternative: You can use the ad copy generator which works with your current Gemini setup.');
        }
        const prompt = `Create a high-quality, professional product image for Facebook ads:

Product: ${productName}
Description: ${productDescription}
Style: ${style}
Aspect Ratio: ${aspectRatio}

The image should be:
- Eye-catching and scroll-stopping
- Professional and clean
- Suitable for Facebook advertising
- High contrast and vibrant colors
- Include the product prominently
- Minimal text overlay
- ${style} aesthetic`;
        try {
            const response = await axios_1.default.post('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
                text_prompts: [{ text: prompt }],
                cfg_scale: 7,
                height: 1024,
                width: 1024,
                samples: 1,
                steps: 30,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${stabilityApiKey}`,
                },
            });
            const imageBase64 = response.data.artifacts[0]?.base64;
            if (!imageBase64) {
                throw new common_1.BadRequestException('Failed to generate image from Stability AI');
            }
            const imageUrl = `data:image/png;base64,${imageBase64}`;
            const creative = this.adCreativeRepository.create({
                type: metaEnum_1.CreativeType.IMAGE,
                imageUrl,
                prompt,
                aiModel: 'stable-diffusion-xl',
                style,
                userId,
            });
            const savedCreative = await this.adCreativeRepository.save(creative);
            return savedCreative;
        }
        catch (error) {
            console.error('Error generating ad image:', error);
            if (error.response?.status === 401) {
                throw new common_1.BadRequestException('Invalid Stability AI API key. Please check your STABILITY_API_KEY in the environment variables.');
            }
            else if (error.response?.status === 402) {
                throw new common_1.BadRequestException('Insufficient credits in your Stability AI account. Please add credits at https://platform.stability.ai/');
            }
            else if (error.response?.data?.message) {
                throw new common_1.BadRequestException(`Stability AI error: ${error.response.data.message}`);
            }
            throw new common_1.BadRequestException('Failed to generate ad image. Please try again or check your Stability AI configuration.');
        }
    }
    async getAdCopyHistory(userId) {
        return this.adCopyRepository.find({
            where: { userId },
            order: { createdAt: 'DESC' },
            take: 50,
        });
    }
    async getAdCreativeHistory(userId) {
        return this.adCreativeRepository.find({
            where: { userId },
            order: { createdAt: 'DESC' },
            take: 50,
        });
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(ad_copy_entity_1.AdCopyEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(ad_creative_entity_1.AdCreativeEntity)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AiService);
//# sourceMappingURL=ai.service.js.map