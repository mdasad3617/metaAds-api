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
exports.UpdateMetaIntegrationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateMetaIntegrationDto {
}
exports.UpdateMetaIntegrationDto = UpdateMetaIntegrationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta access token',
        example: 'EAABwzLixnjYBO...',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMetaIntegrationDto.prototype, "metaAccessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta refresh token',
        example: 'EAABwzLixnjYBO...',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMetaIntegrationDto.prototype, "metaRefreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta token expiration date',
        example: '2024-12-31T23:59:59Z',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdateMetaIntegrationDto.prototype, "metaTokenExpiresAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta user ID',
        example: '123456789',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMetaIntegrationDto.prototype, "metaUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta ad account ID',
        example: 'act_123456789',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMetaIntegrationDto.prototype, "metaAdAccountId", void 0);
//# sourceMappingURL=update-meta-integration.dto.js.map