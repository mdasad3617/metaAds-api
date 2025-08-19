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
exports.AdResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ad_dto_1 = require("./create-ad.dto");
const class_validator_1 = require("class-validator");
class AdResponseDto {
}
exports.AdResponseDto = AdResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad unique identifier',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad name',
        example: 'Summer Sale - Wireless Headphones',
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set ID this ad belongs to',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "adSetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign ID this ad belongs to',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad description',
        example: 'Promoting wireless headphones with summer discount',
        required: false,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad status',
        enum: create_ad_dto_1.AdStatus,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad type',
        enum: create_ad_dto_1.AdType,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "adType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad copy ID used for this ad',
        example: 'uuid-string',
        required: false,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "adCopyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad creative ID used for this ad',
        example: 'uuid-string',
        required: false,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "adCreativeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Landing page URL',
        example: 'https://example.com/products/wireless-headphones',
        required: false,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "landingPageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Call-to-action button text',
        example: 'Shop Now',
        required: false,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "callToAction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta ad ID (if published)',
        example: '123456789',
        required: false,
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "metaAdId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], AdResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], AdResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who created the ad',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], AdResponseDto.prototype, "adCopy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], AdResponseDto.prototype, "adCreative", void 0);
//# sourceMappingURL=ad-response.dto.js.map