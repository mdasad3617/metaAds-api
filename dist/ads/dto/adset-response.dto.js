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
exports.AdSetResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_adset_dto_1 = require("./create-adset.dto");
class AdSetResponseDto {
}
exports.AdSetResponseDto = AdSetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set unique identifier',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set name',
        example: 'Summer Sale - Mobile Users',
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign ID this ad set belongs to',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set description',
        example: 'Targeting mobile users for summer sale campaign',
        required: false,
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set status',
        enum: create_adset_dto_1.AdSetStatus,
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set budget in cents',
        example: 50000,
        required: false,
    }),
    __metadata("design:type", Number)
], AdSetResponseDto.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bid strategy',
        enum: create_adset_dto_1.BidStrategy,
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "bidStrategy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Targeting options',
        type: create_adset_dto_1.TargetingOptionsDto,
        required: false,
    }),
    __metadata("design:type", create_adset_dto_1.TargetingOptionsDto)
], AdSetResponseDto.prototype, "targetingOptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Daily budget cap in cents',
        example: 5000,
        required: false,
    }),
    __metadata("design:type", Number)
], AdSetResponseDto.prototype, "dailyBudgetCap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meta ad set ID (if published)',
        example: '123456789',
        required: false,
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "metaAdSetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], AdSetResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2024-01-01T00:00:00Z',
    }),
    __metadata("design:type", Date)
], AdSetResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who created the ad set',
        example: 'uuid-string',
    }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of ads in this ad set',
        example: 5,
        required: false,
    }),
    __metadata("design:type", Number)
], AdSetResponseDto.prototype, "adsCount", void 0);
//# sourceMappingURL=adset-response.dto.js.map