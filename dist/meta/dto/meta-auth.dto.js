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
exports.MetaConnectionStatusDto = exports.MetaConnectionResponseDto = exports.MetaAuthUrlResponseDto = exports.UpdateAdAccountDto = exports.MetaAuthUrlDto = exports.ConnectMetaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ConnectMetaDto {
}
exports.ConnectMetaDto = ConnectMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Authorization code received from Meta OAuth',
        example: 'AQBhAGVhc...',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConnectMetaDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Redirect URI used in OAuth flow',
        example: 'http://localhost:3000/auth/meta/callback',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], ConnectMetaDto.prototype, "redirectUri", void 0);
class MetaAuthUrlDto {
}
exports.MetaAuthUrlDto = MetaAuthUrlDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Redirect URI for OAuth callback',
        example: 'http://localhost:3000/auth/meta/callback',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], MetaAuthUrlDto.prototype, "redirect_uri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'State parameter for OAuth security',
        example: 'random_state_string',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MetaAuthUrlDto.prototype, "state", void 0);
class UpdateAdAccountDto {
}
exports.UpdateAdAccountDto = UpdateAdAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta Ad Account ID',
        example: 'act_123456789',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAdAccountDto.prototype, "adAccountId", void 0);
class MetaAuthUrlResponseDto {
}
exports.MetaAuthUrlResponseDto = MetaAuthUrlResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta OAuth authorization URL',
        example: 'https://www.facebook.com/v19.0/dialog/oauth?client_id=...',
    }),
    __metadata("design:type", String)
], MetaAuthUrlResponseDto.prototype, "authUrl", void 0);
class MetaConnectionResponseDto {
}
exports.MetaConnectionResponseDto = MetaConnectionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], MetaConnectionResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            id: { type: 'string', example: 'uuid-string' },
            email: { type: 'string', example: 'user@example.com' },
            name: { type: 'string', example: 'John Doe' },
            metaUserId: { type: 'string', example: '123456789' },
            metaAdAccountId: { type: 'string', example: 'act_123456789' },
        },
    }),
    __metadata("design:type", Object)
], MetaConnectionResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            id: { type: 'string', example: '123456789' },
            name: { type: 'string', example: 'John Doe' },
            email: { type: 'string', example: 'user@example.com' },
        },
    }),
    __metadata("design:type", Object)
], MetaConnectionResponseDto.prototype, "metaUser", void 0);
class MetaConnectionStatusDto {
}
exports.MetaConnectionStatusDto = MetaConnectionStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], MetaConnectionStatusDto.prototype, "connected", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Meta account connected successfully', required: false }),
    __metadata("design:type", String)
], MetaConnectionStatusDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", Object)
], MetaConnectionStatusDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'act_123456789', required: false }),
    __metadata("design:type", String)
], MetaConnectionStatusDto.prototype, "adAccountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], MetaConnectionStatusDto.prototype, "error", void 0);
//# sourceMappingURL=meta-auth.dto.js.map