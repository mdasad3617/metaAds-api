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
exports.AdCreativeEntity = void 0;
const typeorm_1 = require("typeorm");
const metaEnum_1 = require("../enum/metaEnum");
const user_entity_1 = require("./user.entity");
const ad_entity_1 = require("./ad.entity");
let AdCreativeEntity = class AdCreativeEntity {
};
exports.AdCreativeEntity = AdCreativeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: metaEnum_1.CreativeType,
        default: metaEnum_1.CreativeType.IMAGE
    }),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "videoUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdCreativeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AdCreativeEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "prompt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "aiModel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "style", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdCreativeEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.adCreatives, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], AdCreativeEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ad_entity_1.AdEntity, ad => ad.adCreative),
    __metadata("design:type", Array)
], AdCreativeEntity.prototype, "ads", void 0);
exports.AdCreativeEntity = AdCreativeEntity = __decorate([
    (0, typeorm_1.Entity)('ad_creatives')
], AdCreativeEntity);
//# sourceMappingURL=ad-creative.entity.js.map