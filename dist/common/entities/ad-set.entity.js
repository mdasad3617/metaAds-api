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
exports.AdSetEntity = void 0;
const typeorm_1 = require("typeorm");
const metaEnum_1 = require("../enum/metaEnum");
const campaign_entity_1 = require("./campaign.entity");
const ad_entity_1 = require("./ad.entity");
let AdSetEntity = class AdSetEntity {
};
exports.AdSetEntity = AdSetEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AdSetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdSetEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], AdSetEntity.prototype, "targetingOptions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], AdSetEntity.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdSetEntity.prototype, "bidStrategy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: metaEnum_1.AdSetStatus,
        default: metaEnum_1.AdSetStatus.DRAFT
    }),
    __metadata("design:type", String)
], AdSetEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdSetEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AdSetEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdSetEntity.prototype, "metaAdSetId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdSetEntity.prototype, "campaignId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => campaign_entity_1.CampaignEntity, campaign => campaign.adSets, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'campaignId' }),
    __metadata("design:type", campaign_entity_1.CampaignEntity)
], AdSetEntity.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ad_entity_1.AdEntity, ad => ad.adSet),
    __metadata("design:type", Array)
], AdSetEntity.prototype, "ads", void 0);
exports.AdSetEntity = AdSetEntity = __decorate([
    (0, typeorm_1.Entity)('ad_sets')
], AdSetEntity);
//# sourceMappingURL=ad-set.entity.js.map