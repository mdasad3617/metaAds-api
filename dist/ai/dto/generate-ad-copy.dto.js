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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateAdCopyDto = exports.AdObjective = exports.AdTone = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var AdTone;
(function (AdTone) {
    AdTone["PROFESSIONAL"] = "professional";
    AdTone["CASUAL"] = "casual";
    AdTone["FRIENDLY"] = "friendly";
    AdTone["URGENT"] = "urgent";
    AdTone["LUXURY"] = "luxury";
    AdTone["PLAYFUL"] = "playful";
})(AdTone || (exports.AdTone = AdTone = {}));
var AdObjective;
(function (AdObjective) {
    AdObjective["AWARENESS"] = "awareness";
    AdObjective["TRAFFIC"] = "traffic";
    AdObjective["ENGAGEMENT"] = "engagement";
    AdObjective["LEADS"] = "leads";
    AdObjective["SALES"] = "sales";
    AdObjective["APP_PROMOTION"] = "app_promotion";
})(AdObjective || (exports.AdObjective = AdObjective = {}));
class GenerateAdCopyDto {
    constructor() {
        this.tone = AdTone.PROFESSIONAL;
        this.variations = 3;
    }
}
exports.GenerateAdCopyDto = GenerateAdCopyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product or service name',
        example: 'Wireless Bluetooth Headphones',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateAdCopyDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detailed product description',
        example: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateAdCopyDto.prototype, "productDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Target audience description',
        example: 'Tech-savvy professionals aged 25-40 who value quality audio and convenience',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateAdCopyDto.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Primary advertising objective',
        enum: AdObjective,
        example: AdObjective.SALES,
    }),
    (0, class_validator_1.IsEnum)(AdObjective),
    __metadata("design:type", String)
], GenerateAdCopyDto.prototype, "adObjective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tone of voice for the ad copy',
        enum: AdTone,
        example: AdTone.PROFESSIONAL,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AdTone),
    __metadata("design:type", String)
], GenerateAdCopyDto.prototype, "tone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of copy variations to generate',
        example: 3,
        minimum: 1,
        maximum: 5,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], GenerateAdCopyDto.prototype, "variations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Additional context or special requirements',
        example: 'Emphasize the eco-friendly packaging and free shipping',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateAdCopyDto.prototype, "additionalContext", void 0);
//# sourceMappingURL=generate-ad-copy.dto.js.map