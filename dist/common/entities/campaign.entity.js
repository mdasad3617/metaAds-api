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
exports.CampaignEntity = void 0;
const typeorm_1 = require("typeorm");
const metaEnum_1 = require("../enum/metaEnum");
const ad_copy_entity_1 = require("./ad-copy.entity");
const ad_set_entity_1 = require("./ad-set.entity");
const user_entity_1 = require("./user.entity");
let CampaignEntity = class CampaignEntity {
};
exports.CampaignEntity = CampaignEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CampaignEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CampaignEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: metaEnum_1.CampaignObjective,
        default: metaEnum_1.CampaignObjective.TRAFFIC
    }),
    __metadata("design:type", String)
], CampaignEntity.prototype, "objective", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: metaEnum_1.CampaignStatus,
        default: metaEnum_1.CampaignStatus.DRAFT
    }),
    __metadata("design:type", String)
], CampaignEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], CampaignEntity.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CampaignEntity.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CampaignEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CampaignEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CampaignEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CampaignEntity.prototype, "metaCampaignId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CampaignEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.campaigns, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], CampaignEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ad_set_entity_1.AdSetEntity, adSet => adSet.campaign),
    __metadata("design:type", Array)
], CampaignEntity.prototype, "adSets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ad_copy_entity_1.AdCopyEntity, adCopy => adCopy.campaign),
    __metadata("design:type", Array)
], CampaignEntity.prototype, "adCopies", void 0);
exports.CampaignEntity = CampaignEntity = __decorate([
    (0, typeorm_1.Entity)('campaigns')
], CampaignEntity);
//# sourceMappingURL=campaign.entity.js.map