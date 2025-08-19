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
exports.CreateAdSetDto = exports.TargetingOptionsDto = exports.BidStrategy = exports.AdSetStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var AdSetStatus;
(function (AdSetStatus) {
    AdSetStatus["DRAFT"] = "DRAFT";
    AdSetStatus["ACTIVE"] = "ACTIVE";
    AdSetStatus["PAUSED"] = "PAUSED";
    AdSetStatus["ARCHIVED"] = "ARCHIVED";
})(AdSetStatus || (exports.AdSetStatus = AdSetStatus = {}));
var BidStrategy;
(function (BidStrategy) {
    BidStrategy["LOWEST_COST_WITHOUT_CAP"] = "LOWEST_COST_WITHOUT_CAP";
    BidStrategy["LOWEST_COST_WITH_BID_CAP"] = "LOWEST_COST_WITH_BID_CAP";
    BidStrategy["TARGET_COST"] = "TARGET_COST";
    BidStrategy["COST_CAP"] = "COST_CAP";
})(BidStrategy || (exports.BidStrategy = BidStrategy = {}));
class TargetingOptionsDto {
}
exports.TargetingOptionsDto = TargetingOptionsDto;
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], TargetingOptionsDto.prototype, "ageRange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gender targeting (1=male, 2=female)',
        type: 'array',
        items: { type: 'number' },
        example: [1, 2],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingOptionsDto.prototype, "genders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], TargetingOptionsDto.prototype, "locations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Interest targeting',
        type: 'array',
        items: { type: 'string' },
        example: ['Technology', 'Music', 'Sports'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingOptionsDto.prototype, "interests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Behavior targeting',
        type: 'array',
        items: { type: 'string' },
        example: ['Frequent travelers', 'Online shoppers'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingOptionsDto.prototype, "behaviors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Device targeting',
        type: 'array',
        items: { type: 'string' },
        example: ['mobile', 'desktop'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingOptionsDto.prototype, "devices", void 0);
class CreateAdSetDto {
    constructor() {
        this.bidStrategy = BidStrategy.LOWEST_COST_WITHOUT_CAP;
        this.status = AdSetStatus.DRAFT;
    }
}
exports.CreateAdSetDto = CreateAdSetDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set name',
        example: 'Summer Sale - Mobile Users',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign ID this ad set belongs to',
        example: 'uuid-string',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set description',
        example: 'Targeting mobile users for summer sale campaign',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Targeting options for the ad set',
        type: TargetingOptionsDto,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TargetingOptionsDto),
    __metadata("design:type", TargetingOptionsDto)
], CreateAdSetDto.prototype, "targetingOptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set budget in cents',
        example: 50000,
        minimum: 100,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(100),
    __metadata("design:type", Number)
], CreateAdSetDto.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bid strategy',
        enum: BidStrategy,
        example: BidStrategy.LOWEST_COST_WITHOUT_CAP,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(BidStrategy),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "bidStrategy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set status',
        enum: AdSetStatus,
        example: AdSetStatus.DRAFT,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(AdSetStatus),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Daily budget cap in cents',
        example: 5000,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(100),
    __metadata("design:type", Number)
], CreateAdSetDto.prototype, "dailyBudgetCap", void 0);
//# sourceMappingURL=create-adset.dto.js.map