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
exports.AdsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const meta_service_1 = require("../meta/meta.service");
const campaign_entity_1 = require("../common/entities/campaign.entity");
const ad_set_entity_1 = require("../common/entities/ad-set.entity");
const ad_entity_1 = require("../common/entities/ad.entity");
const ad_copy_entity_1 = require("../common/entities/ad-copy.entity");
const ad_creative_entity_1 = require("../common/entities/ad-creative.entity");
let AdsService = class AdsService {
    constructor(campaignRepository, adSetRepository, adRepository, adCopyRepository, adCreativeRepository, usersService, metaService) {
        this.campaignRepository = campaignRepository;
        this.adSetRepository = adSetRepository;
        this.adRepository = adRepository;
        this.adCopyRepository = adCopyRepository;
        this.adCreativeRepository = adCreativeRepository;
        this.usersService = usersService;
        this.metaService = metaService;
    }
    async createCampaign(userId, request) {
        const { name, objective, budget, startDate, endDate } = request;
        const campaign = this.campaignRepository.create({
            name,
            objective: objective,
            budget,
            startDate: startDate ? new Date(startDate) : undefined,
            endDate: endDate ? new Date(endDate) : undefined,
            userId,
        });
        return this.campaignRepository.save(campaign);
    }
    async createAdSet(userId, request) {
        const { campaignId, name, targetingOptions, budget, bidStrategy } = request;
        const campaign = await this.campaignRepository.findOne({
            where: { id: campaignId, userId },
        });
        if (!campaign) {
            throw new common_1.BadRequestException('Campaign not found');
        }
        const adSet = this.adSetRepository.create({
            name,
            targetingOptions,
            budget,
            bidStrategy,
            campaignId,
        });
        return this.adSetRepository.save(adSet);
    }
    async createAd(userId, request) {
        const { adSetId, name, adCopyId, adCreativeId } = request;
        const adSet = await this.adSetRepository.findOne({
            where: { id: adSetId },
            relations: ['campaign'],
        });
        if (!adSet || adSet.campaign.userId !== userId) {
            throw new common_1.BadRequestException('Ad set not found');
        }
        const ad = this.adRepository.create({
            name,
            adSetId,
            adCopyId,
            adCreativeId,
        });
        return this.adRepository.save(ad);
    }
    async getCampaigns(userId) {
        return this.campaignRepository.find({
            where: { userId },
            relations: ['adSets', 'adSets.ads', 'adSets.ads.adCopy', 'adSets.ads.adCreative'],
            order: { createdAt: 'DESC' },
        });
    }
    async getCampaignById(userId, campaignId) {
        return this.campaignRepository.findOne({
            where: { id: campaignId, userId },
            relations: ['adSets', 'adSets.ads', 'adSets.ads.adCopy', 'adSets.ads.adCreative'],
        });
    }
    async publishCampaignToMeta(userId, campaignId) {
        const user = await this.usersService.findById(userId);
        if (!user?.metaAccessToken || !user?.metaAdAccountId) {
            throw new common_1.BadRequestException('Meta integration not configured. Please connect your Facebook account and select an ad account.');
        }
        const campaign = await this.campaignRepository.findOne({
            where: { id: campaignId, userId },
            relations: ['adSets', 'adSets.ads', 'adSets.ads.adCopy', 'adSets.ads.adCreative'],
        });
        if (!campaign) {
            throw new common_1.BadRequestException('Campaign not found');
        }
        if (campaign.metaCampaignId) {
            throw new common_1.BadRequestException('Campaign is already published to Meta');
        }
        try {
            const metaCampaignResponse = await this.metaService.createCampaign(userId, user.metaAdAccountId, {
                name: campaign.name,
                objective: campaign.objective,
            });
            await this.campaignRepository.update(campaignId, {
                metaCampaignId: metaCampaignResponse.id
            });
            return {
                ...campaign,
                metaCampaignId: metaCampaignResponse.id,
                message: 'Campaign published to Meta successfully',
            };
        }
        catch (error) {
            console.error('Error publishing campaign to Meta:', error);
            throw new common_1.BadRequestException(`Failed to publish campaign to Meta: ${error.message}`);
        }
    }
    async getMetaAdAccounts(userId) {
        return this.metaService.getAdAccounts(userId);
    }
};
exports.AdsService = AdsService;
exports.AdsService = AdsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.CampaignEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(ad_set_entity_1.AdSetEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(ad_entity_1.AdEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(ad_copy_entity_1.AdCopyEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(ad_creative_entity_1.AdCreativeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService,
        meta_service_1.MetaService])
], AdsService);
//# sourceMappingURL=ads.service.js.map