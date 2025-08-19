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
exports.CampaignInsightsDto = exports.CampaignResponseDto = exports.CampaignInsightsQueryDto = exports.UpdateCampaignStatusDto = exports.CreateCampaignDto = exports.BuyingType = exports.CampaignStatus = exports.CampaignObjective = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var CampaignObjective;
(function (CampaignObjective) {
    CampaignObjective["OUTCOME_AWARENESS"] = "OUTCOME_AWARENESS";
    CampaignObjective["OUTCOME_TRAFFIC"] = "OUTCOME_TRAFFIC";
    CampaignObjective["OUTCOME_ENGAGEMENT"] = "OUTCOME_ENGAGEMENT";
    CampaignObjective["OUTCOME_LEADS"] = "OUTCOME_LEADS";
    CampaignObjective["OUTCOME_APP_PROMOTION"] = "OUTCOME_APP_PROMOTION";
    CampaignObjective["OUTCOME_SALES"] = "OUTCOME_SALES";
})(CampaignObjective || (exports.CampaignObjective = CampaignObjective = {}));
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["ACTIVE"] = "ACTIVE";
    CampaignStatus["PAUSED"] = "PAUSED";
    CampaignStatus["DELETED"] = "DELETED";
    CampaignStatus["ARCHIVED"] = "ARCHIVED";
})(CampaignStatus || (exports.CampaignStatus = CampaignStatus = {}));
var BuyingType;
(function (BuyingType) {
    BuyingType["AUCTION"] = "AUCTION";
    BuyingType["RESERVED"] = "RESERVED";
})(BuyingType || (exports.BuyingType = BuyingType = {}));
class CreateCampaignDto {
    constructor() {
        this.status = CampaignStatus.PAUSED;
        this.special_ad_categories = [];
        this.buying_type = BuyingType.AUCTION;
    }
}
exports.CreateCampaignDto = CreateCampaignDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign name',
        example: 'Summer Sale Campaign 2024',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign objective',
        enum: CampaignObjective,
        example: CampaignObjective.OUTCOME_SALES,
    }),
    (0, class_validator_1.IsEnum)(CampaignObjective),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "objective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign status',
        enum: CampaignStatus,
        example: CampaignStatus.PAUSED,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(CampaignStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Special ad categories',
        type: [String],
        example: [],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCampaignDto.prototype, "special_ad_categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Buying type',
        enum: BuyingType,
        example: BuyingType.AUCTION,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(BuyingType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCampaignDto.prototype, "buying_type", void 0);
class UpdateCampaignStatusDto {
}
exports.UpdateCampaignStatusDto = UpdateCampaignStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'New campaign status',
        enum: CampaignStatus,
        example: CampaignStatus.ACTIVE,
    }),
    (0, class_validator_1.IsEnum)(CampaignStatus),
    __metadata("design:type", String)
], UpdateCampaignStatusDto.prototype, "status", void 0);
class CampaignInsightsQueryDto {
}
exports.CampaignInsightsQueryDto = CampaignInsightsQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Start date for insights (YYYY-MM-DD)',
        example: '2024-01-01',
        required: false,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CampaignInsightsQueryDto.prototype, "since", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'End date for insights (YYYY-MM-DD)',
        example: '2024-01-31',
        required: false,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CampaignInsightsQueryDto.prototype, "until", void 0);
class CampaignResponseDto {
}
exports.CampaignResponseDto = CampaignResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456789' }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Summer Sale Campaign 2024' }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: CampaignObjective }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "objective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: CampaignStatus }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "created_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "updated_time", void 0);
class CampaignInsightsDto {
}
exports.CampaignInsightsDto = CampaignInsightsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345', description: 'Number of impressions' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "impressions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '567', description: 'Number of clicks' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "clicks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123.45', description: 'Amount spent' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "spend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4.59', description: 'Click-through rate' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "ctr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10.00', description: 'Cost per mille (thousand impressions)' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "cpm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0.22', description: 'Cost per click' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "cpp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8900', description: 'Reach' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "reach", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.39', description: 'Frequency' }),
    __metadata("design:type", String)
], CampaignInsightsDto.prototype, "frequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'object' }, description: 'Actions taken' }),
    __metadata("design:type", Array)
], CampaignInsightsDto.prototype, "actions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'object' }, description: 'Cost per action type' }),
    __metadata("design:type", Array)
], CampaignInsightsDto.prototype, "cost_per_action_type", void 0);
//# sourceMappingURL=meta-campaign.dto.js.map