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
exports.CreateAdDto = exports.AdType = exports.AdStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var AdStatus;
(function (AdStatus) {
    AdStatus["DRAFT"] = "DRAFT";
    AdStatus["ACTIVE"] = "ACTIVE";
    AdStatus["PAUSED"] = "PAUSED";
    AdStatus["ARCHIVED"] = "ARCHIVED";
})(AdStatus || (exports.AdStatus = AdStatus = {}));
var AdType;
(function (AdType) {
    AdType["IMAGE"] = "IMAGE";
    AdType["VIDEO"] = "VIDEO";
    AdType["CAROUSEL"] = "CAROUSEL";
    AdType["COLLECTION"] = "COLLECTION";
})(AdType || (exports.AdType = AdType = {}));
class CreateAdDto {
    constructor() {
        this.adType = AdType.IMAGE;
        this.status = AdStatus.DRAFT;
    }
}
exports.CreateAdDto = CreateAdDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad name',
        example: 'Summer Sale - Wireless Headphones',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set ID this ad belongs to',
        example: 'uuid-string',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "adSetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad description',
        example: 'Promoting wireless headphones with summer discount',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad copy ID to use for this ad',
        example: 'uuid-string',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "adCopyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad creative ID to use for this ad',
        example: 'uuid-string',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "adCreativeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad type',
        enum: AdType,
        example: AdType.IMAGE,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AdType),
    __metadata("design:type", String)
], CreateAdDto.prototype, "adType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad status',
        enum: AdStatus,
        example: AdStatus.DRAFT,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AdStatus),
    __metadata("design:type", String)
], CreateAdDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Landing page URL',
        example: 'https://example.com/products/wireless-headphones',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "landingPageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Call-to-action button text',
        example: 'Shop Now',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "callToAction", void 0);
//# sourceMappingURL=create-ad.dto.js.map