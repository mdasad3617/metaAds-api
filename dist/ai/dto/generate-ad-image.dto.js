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
exports.GenerateAdImageDto = exports.AspectRatio = exports.ImageStyle = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var ImageStyle;
(function (ImageStyle) {
    ImageStyle["REALISTIC"] = "realistic";
    ImageStyle["MINIMALIST"] = "minimalist";
    ImageStyle["MODERN"] = "modern";
    ImageStyle["VINTAGE"] = "vintage";
    ImageStyle["ABSTRACT"] = "abstract";
    ImageStyle["LIFESTYLE"] = "lifestyle";
    ImageStyle["PRODUCT_FOCUS"] = "product_focus";
})(ImageStyle || (exports.ImageStyle = ImageStyle = {}));
var AspectRatio;
(function (AspectRatio) {
    AspectRatio["SQUARE"] = "1:1";
    AspectRatio["LANDSCAPE"] = "16:9";
    AspectRatio["PORTRAIT"] = "9:16";
    AspectRatio["STORY"] = "9:16";
    AspectRatio["FEED"] = "4:5";
})(AspectRatio || (exports.AspectRatio = AspectRatio = {}));
class GenerateAdImageDto {
    constructor() {
        this.style = ImageStyle.MODERN;
        this.aspectRatio = AspectRatio.SQUARE;
    }
}
exports.GenerateAdImageDto = GenerateAdImageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product or service name',
        example: 'Wireless Bluetooth Headphones',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateAdImageDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detailed product description',
        example: 'Premium wireless headphones with active noise cancellation and sleek black design',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateAdImageDto.prototype, "productDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Visual style for the generated image',
        enum: ImageStyle,
        example: ImageStyle.MODERN,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(ImageStyle),
    __metadata("design:type", String)
], GenerateAdImageDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Image aspect ratio',
        enum: AspectRatio,
        example: AspectRatio.SQUARE,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AspectRatio),
    __metadata("design:type", String)
], GenerateAdImageDto.prototype, "aspectRatio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Background setting or environment',
        example: 'Clean white studio background with soft lighting',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateAdImageDto.prototype, "background", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Additional visual elements or requirements',
        example: 'Include lifestyle elements like a modern workspace',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateAdImageDto.prototype, "additionalElements", void 0);
//# sourceMappingURL=generate-ad-image.dto.js.map