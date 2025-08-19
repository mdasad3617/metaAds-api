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
exports.AdCopyHistoryDto = exports.AdCopyResponseDto = exports.AdCopyVariationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AdCopyVariationDto {
}
exports.AdCopyVariationDto = AdCopyVariationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad headline',
        example: 'Experience Premium Sound Like Never Before',
    }),
    __metadata("design:type", String)
], AdCopyVariationDto.prototype, "headline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad description/body text',
        example: 'Discover wireless freedom with our premium Bluetooth headphones. Active noise cancellation meets 30-hour battery life.',
    }),
    __metadata("design:type", String)
], AdCopyVariationDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Call-to-action text',
        example: 'Shop Now',
    }),
    __metadata("design:type", String)
], AdCopyVariationDto.prototype, "callToAction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Primary text for the ad',
        example: 'Transform your audio experience with cutting-edge technology.',
        required: false,
    }),
    __metadata("design:type", String)
], AdCopyVariationDto.prototype, "primaryText", void 0);
class AdCopyResponseDto {
}
exports.AdCopyResponseDto = AdCopyResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Generated ad copy ID',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdCopyResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product name used for generation',
        example: 'Wireless Bluetooth Headphones',
    }),
    __metadata("design:type", String)
], AdCopyResponseDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Generated ad copy variations',
        type: [AdCopyVariationDto],
    }),
    __metadata("design:type", Array)
], AdCopyResponseDto.prototype, "copies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", Object)
], AdCopyResponseDto.prototype, "parameters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], AdCopyResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who generated the copy',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdCopyResponseDto.prototype, "userId", void 0);
class AdCopyHistoryDto {
}
exports.AdCopyHistoryDto = AdCopyHistoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of generated ad copies',
        type: [AdCopyResponseDto],
    }),
    __metadata("design:type", Array)
], AdCopyHistoryDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total count of generated copies',
        example: 25,
    }),
    __metadata("design:type", Number)
], AdCopyHistoryDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current page number',
        example: 1,
    }),
    __metadata("design:type", Number)
], AdCopyHistoryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Items per page',
        example: 10,
    }),
    __metadata("design:type", Number)
], AdCopyHistoryDto.prototype, "limit", void 0);
//# sourceMappingURL=ad-copy-response.dto.js.map