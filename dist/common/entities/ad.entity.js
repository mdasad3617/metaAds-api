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
exports.AdEntity = void 0;
const typeorm_1 = require("typeorm");
const metaEnum_1 = require("../enum/metaEnum");
const ad_set_entity_1 = require("./ad-set.entity");
const ad_copy_entity_1 = require("./ad-copy.entity");
const ad_creative_entity_1 = require("./ad-creative.entity");
let AdEntity = class AdEntity {
};
exports.AdEntity = AdEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AdEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: metaEnum_1.AdStatus,
        default: metaEnum_1.AdStatus.DRAFT
    }),
    __metadata("design:type", String)
], AdEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AdEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdEntity.prototype, "metaAdId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdEntity.prototype, "adSetId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ad_set_entity_1.AdSetEntity, adSet => adSet.ads, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'adSetId' }),
    __metadata("design:type", ad_set_entity_1.AdSetEntity)
], AdEntity.prototype, "adSet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdEntity.prototype, "adCopyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ad_copy_entity_1.AdCopyEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'adCopyId' }),
    __metadata("design:type", ad_copy_entity_1.AdCopyEntity)
], AdEntity.prototype, "adCopy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdEntity.prototype, "adCreativeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ad_creative_entity_1.AdCreativeEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'adCreativeId' }),
    __metadata("design:type", ad_creative_entity_1.AdCreativeEntity)
], AdEntity.prototype, "adCreative", void 0);
exports.AdEntity = AdEntity = __decorate([
    (0, typeorm_1.Entity)('ads')
], AdEntity);
//# sourceMappingURL=ad.entity.js.map