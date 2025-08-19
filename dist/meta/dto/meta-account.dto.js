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
exports.MetaAdAccountsResponseDto = exports.MetaAdAccountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MetaAdAccountDto {
}
exports.MetaAdAccountDto = MetaAdAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'act_123456789' }),
    __metadata("design:type", String)
], MetaAdAccountDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My Business Ad Account' }),
    __metadata("design:type", String)
], MetaAdAccountDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Account status: 1 = ACTIVE, 2 = DISABLED, 3 = UNSETTLED, 7 = PENDING_RISK_REVIEW, 8 = PENDING_SETTLEMENT, 9 = IN_GRACE_PERIOD, 100 = PENDING_CLOSURE, 101 = CLOSED, 201 = ANY_ACTIVE, 202 = ANY_CLOSED'
    }),
    __metadata("design:type", Number)
], MetaAdAccountDto.prototype, "account_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'USD' }),
    __metadata("design:type", String)
], MetaAdAccountDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'America/New_York' }),
    __metadata("design:type", String)
], MetaAdAccountDto.prototype, "timezone_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1234.56', description: 'Amount spent in account currency' }),
    __metadata("design:type", String)
], MetaAdAccountDto.prototype, "amount_spent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5000.00', description: 'Account balance in account currency' }),
    __metadata("design:type", String)
], MetaAdAccountDto.prototype, "balance", void 0);
class MetaAdAccountsResponseDto {
}
exports.MetaAdAccountsResponseDto = MetaAdAccountsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [MetaAdAccountDto],
        description: 'List of Meta ad accounts'
    }),
    __metadata("design:type", Array)
], MetaAdAccountsResponseDto.prototype, "data", void 0);
//# sourceMappingURL=meta-account.dto.js.map