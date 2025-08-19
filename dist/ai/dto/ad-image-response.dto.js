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
exports.AdImageHistoryDto = exports.AdImageResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AdImageResponseDto {
}
exports.AdImageResponseDto = AdImageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Generated ad image ID',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdImageResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product name used for generation',
        example: 'Wireless Bluetooth Headphones',
    }),
    __metadata("design:type", String)
], AdImageResponseDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Generated image URL',
        example: 'https://example.com/images/generated-ad-image.jpg',
    }),
    __metadata("design:type", String)
], AdImageResponseDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Image generation prompt used',
        example: 'Modern wireless bluetooth headphones on clean white background with soft lighting',
    }),
    __metadata("design:type", String)
], AdImageResponseDto.prototype, "prompt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", Object)
], AdImageResponseDto.prototype, "dimensions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", Object)
], AdImageResponseDto.prototype, "parameters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], AdImageResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who generated the image',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdImageResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Image file size in bytes',
        example: 245760,
        required: false,
    }),
    __metadata("design:type", Number)
], AdImageResponseDto.prototype, "fileSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Image format',
        example: 'JPEG',
        required: false,
    }),
    __metadata("design:type", String)
], AdImageResponseDto.prototype, "format", void 0);
class AdImageHistoryDto {
}
exports.AdImageHistoryDto = AdImageHistoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of generated ad images',
        type: [AdImageResponseDto],
    }),
    __metadata("design:type", Array)
], AdImageHistoryDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total count of generated images',
        example: 15,
    }),
    __metadata("design:type", Number)
], AdImageHistoryDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current page number',
        example: 1,
    }),
    __metadata("design:type", Number)
], AdImageHistoryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Items per page',
        example: 10,
    }),
    __metadata("design:type", Number)
], AdImageHistoryDto.prototype, "limit", void 0);
//# sourceMappingURL=ad-image-response.dto.js.map