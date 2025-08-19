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
exports.AdSetResponseDto = exports.CreateAdSetDto = exports.TargetingDto = exports.OptimizationGoal = exports.BillingEvent = exports.AdSetStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var AdSetStatus;
(function (AdSetStatus) {
    AdSetStatus["ACTIVE"] = "ACTIVE";
    AdSetStatus["PAUSED"] = "PAUSED";
    AdSetStatus["DELETED"] = "DELETED";
    AdSetStatus["ARCHIVED"] = "ARCHIVED";
})(AdSetStatus || (exports.AdSetStatus = AdSetStatus = {}));
var BillingEvent;
(function (BillingEvent) {
    BillingEvent["IMPRESSIONS"] = "IMPRESSIONS";
    BillingEvent["CLICKS"] = "CLICKS";
    BillingEvent["ACTIONS"] = "ACTIONS";
    BillingEvent["THRUPLAY"] = "THRUPLAY";
})(BillingEvent || (exports.BillingEvent = BillingEvent = {}));
var OptimizationGoal;
(function (OptimizationGoal) {
    OptimizationGoal["REACH"] = "REACH";
    OptimizationGoal["IMPRESSIONS"] = "IMPRESSIONS";
    OptimizationGoal["CLICKS"] = "CLICKS";
    OptimizationGoal["ACTIONS"] = "ACTIONS";
    OptimizationGoal["UNIQUE_CLICKS"] = "UNIQUE_CLICKS";
    OptimizationGoal["LINK_CLICKS"] = "LINK_CLICKS";
    OptimizationGoal["POST_ENGAGEMENT"] = "POST_ENGAGEMENT";
    OptimizationGoal["PAGE_LIKES"] = "PAGE_LIKES";
    OptimizationGoal["EVENT_RESPONSES"] = "EVENT_RESPONSES";
    OptimizationGoal["CONVERSIONS"] = "CONVERSIONS";
    OptimizationGoal["APP_INSTALLS"] = "APP_INSTALLS";
    OptimizationGoal["APP_EVENTS"] = "APP_EVENTS";
    OptimizationGoal["OFFSITE_CONVERSIONS"] = "OFFSITE_CONVERSIONS";
    OptimizationGoal["THRUPLAY"] = "THRUPLAY";
    OptimizationGoal["LANDING_PAGE_VIEWS"] = "LANDING_PAGE_VIEWS";
    OptimizationGoal["QUALITY_CALL"] = "QUALITY_CALL";
    OptimizationGoal["QUALITY_LEAD"] = "QUALITY_LEAD";
})(OptimizationGoal || (exports.OptimizationGoal = OptimizationGoal = {}));
class TargetingDto {
}
exports.TargetingDto = TargetingDto;
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], TargetingDto.prototype, "geo_locations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], TargetingDto.prototype, "age_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gender targeting',
        type: 'array',
        items: { type: 'number' },
        example: [1, 2],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingDto.prototype, "genders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Interest targeting',
        type: 'array',
        items: { type: 'object' },
        example: [{ id: '6003107902433', name: 'Association football (Soccer)' }],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingDto.prototype, "interests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Behavior targeting',
        type: 'array',
        items: { type: 'object' },
        example: [{ id: '6002714895372', name: 'All travelers' }],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingDto.prototype, "behaviors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Custom audiences',
        type: 'array',
        items: { type: 'string' },
        example: ['123456789'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingDto.prototype, "custom_audiences", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Excluded custom audiences',
        type: 'array',
        items: { type: 'string' },
        example: ['987654321'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TargetingDto.prototype, "excluded_custom_audiences", void 0);
class CreateAdSetDto {
    constructor() {
        this.billing_event = BillingEvent.IMPRESSIONS;
        this.optimization_goal = OptimizationGoal.REACH;
        this.status = AdSetStatus.PAUSED;
    }
}
exports.CreateAdSetDto = CreateAdSetDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set name',
        example: 'Summer Sale AdSet - Mobile Users',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campaign ID this ad set belongs to',
        example: '123456789',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "campaign_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Targeting options for the ad set',
        type: TargetingDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TargetingDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", TargetingDto)
], CreateAdSetDto.prototype, "targeting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Billing event',
        enum: BillingEvent,
        example: BillingEvent.IMPRESSIONS,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(BillingEvent),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "billing_event", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Optimization goal',
        enum: OptimizationGoal,
        example: OptimizationGoal.REACH,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(OptimizationGoal),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "optimization_goal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bid amount in cents',
        example: 100,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAdSetDto.prototype, "bid_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Daily budget in cents',
        example: 1000,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAdSetDto.prototype, "daily_budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lifetime budget in cents',
        example: 10000,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAdSetDto.prototype, "lifetime_budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ad set status',
        enum: AdSetStatus,
        example: AdSetStatus.PAUSED,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(AdSetStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAdSetDto.prototype, "status", void 0);
class AdSetResponseDto {
}
exports.AdSetResponseDto = AdSetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456789' }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Summer Sale AdSet - Mobile Users' }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '987654321' }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "campaign_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: AdSetStatus }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: BillingEvent }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "billing_event", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: OptimizationGoal }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "optimization_goal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000' }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "daily_budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10000' }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "lifetime_budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], AdSetResponseDto.prototype, "targeting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "created_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00Z' }),
    __metadata("design:type", String)
], AdSetResponseDto.prototype, "updated_time", void 0);
//# sourceMappingURL=meta-adset.dto.js.map