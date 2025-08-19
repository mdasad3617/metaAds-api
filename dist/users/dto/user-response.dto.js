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
exports.MetaIntegrationResponseDto = exports.UserResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserResponseDto {
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User unique identifier',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User email address',
        example: 'user@example.com',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User full name',
        example: 'John Doe',
        required: false,
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account creation date',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta user ID',
        example: '123456789',
        required: false,
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "metaUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta ad account ID',
        example: 'act_123456789',
        required: false,
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "metaAdAccountId", void 0);
class MetaIntegrationResponseDto {
}
exports.MetaIntegrationResponseDto = MetaIntegrationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Operation success status',
        example: true,
    }),
    __metadata("design:type", Boolean)
], MetaIntegrationResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Meta integration updated successfully',
    }),
    __metadata("design:type", String)
], MetaIntegrationResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated user data',
        type: UserResponseDto,
    }),
    __metadata("design:type", UserResponseDto)
], MetaIntegrationResponseDto.prototype, "user", void 0);
//# sourceMappingURL=user-response.dto.js.map