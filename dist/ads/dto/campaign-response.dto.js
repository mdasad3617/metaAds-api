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
exports.PublishCampaignResponseDto = exports.CampaignResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_campaign_dto_1 = require("./create-campaign.dto");
class CampaignResponseDto {
}
exports.CampaignResponseDto = CampaignResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign unique identifier',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign name',
        example: 'Summer Sale Campaign 2024',
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign objective',
        enum: create_campaign_dto_1.CampaignObjective,
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "objective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign description',
        example: 'Promoting summer collection with special discounts',
        required: false,
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign status',
        enum: create_campaign_dto_1.CampaignStatus,
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign budget in cents',
        example: 100000,
        required: false,
    }),
    __metadata("design:type", Number)
], CampaignResponseDto.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign start date',
        example: '2024-06-01',
        required: false,
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign end date',
        example: '2024-08-31',
        required: false,
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Target audience description',
        example: 'Young adults aged 18-35 interested in fashion',
        required: false,
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta campaign ID (if published)',
        example: '123456789',
        required: false,
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "metaCampaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], CampaignResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], CampaignResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who created the campaign',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], CampaignResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of ad sets in this campaign',
        example: 3,
        required: false,
    }),
    __metadata("design:type", Number)
], CampaignResponseDto.prototype, "adSetsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of ads in this campaign',
        example: 8,
        required: false,
    }),
    __metadata("design:type", Number)
], CampaignResponseDto.prototype, "adsCount", void 0);
class PublishCampaignResponseDto {
}
exports.PublishCampaignResponseDto = PublishCampaignResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Operation success status',
        example: true,
    }),
    __metadata("design:type", Boolean)
], PublishCampaignResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta campaign ID',
        example: '123456789',
    }),
    __metadata("design:type", String)
], PublishCampaignResponseDto.prototype, "metaCampaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Campaign published to Meta successfully',
    }),
    __metadata("design:type", String)
], PublishCampaignResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated campaign data',
        type: CampaignResponseDto,
    }),
    __metadata("design:type", CampaignResponseDto)
], PublishCampaignResponseDto.prototype, "campaign", void 0);
//# sourceMappingURL=campaign-response.dto.js.map