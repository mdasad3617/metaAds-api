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
exports.AdCreativeResponseDto = exports.AdResponseDto = exports.CreateAdDto = exports.CreateAdCreativeDto = exports.AdCreativeDto = exports.ObjectStorySpecDto = exports.AdStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var AdStatus;
(function (AdStatus) {
    AdStatus["ACTIVE"] = "ACTIVE";
    AdStatus["PAUSED"] = "PAUSED";
    AdStatus["DELETED"] = "DELETED";
    AdStatus["ARCHIVED"] = "ARCHIVED";
})(AdStatus || (exports.AdStatus = AdStatus = {}));
class ObjectStorySpecDto {
}
exports.ObjectStorySpecDto = ObjectStorySpecDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Page ID for the ad',
        example: '123456789',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ObjectStorySpecDto.prototype, "page_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ObjectStorySpecDto.prototype, "link_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ObjectStorySpecDto.prototype, "photo_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ObjectStorySpecDto.prototype, "video_data", void 0);
class AdCreativeDto {
}
exports.AdCreativeDto = AdCreativeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creative name',
        example: 'Summer Sale Creative',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AdCreativeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Object story specification',
        type: ObjectStorySpecDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ObjectStorySpecDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", ObjectStorySpecDto)
], AdCreativeDto.prototype, "object_story_spec", void 0);
class CreateAdCreativeDto {
}
exports.CreateAdCreativeDto = CreateAdCreativeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creative name',
        example: 'Summer Sale Creative',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdCreativeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Object story specification',
        type: ObjectStorySpecDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ObjectStorySpecDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", ObjectStorySpecDto)
], CreateAdCreativeDto.prototype, "object_story_spec", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateAdCreativeDto.prototype, "degrees_of_freedom_spec", void 0);
class CreateAdDto {
    constructor() {
        this.status = AdStatus.PAUSED;
    }
}
exports.CreateAdDto = CreateAdDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad name',
        example: 'Summer Sale Ad - Mobile',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set ID this ad belongs to',
        example: '123456789',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "adset_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad creative configuration',
        type: AdCreativeDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AdCreativeDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", AdCreativeDto)
], CreateAdDto.prototype, "creative", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad status',
        enum: AdStatus,
        example: AdStatus.PAUSED,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(AdStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAdDto.prototype, "status", void 0);
class AdResponseDto {
}
exports.AdResponseDto = AdResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456789' }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Summer Sale Ad - Mobile' }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '987654321' }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "adset_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '456789123' }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "campaign_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: AdStatus }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], AdResponseDto.prototype, "creative", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "created_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], AdResponseDto.prototype, "updated_time", void 0);
class AdCreativeResponseDto {
}
exports.AdCreativeResponseDto = AdCreativeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456789' }),
    __metadata("design:type", String)
], AdCreativeResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Summer Sale Creative' }),
    __metadata("design:type", String)
], AdCreativeResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], AdCreativeResponseDto.prototype, "object_story_spec", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], AdCreativeResponseDto.prototype, "created_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], AdCreativeResponseDto.prototype, "updated_time", void 0);
//# sourceMappingURL=meta-ad.dto.js.map