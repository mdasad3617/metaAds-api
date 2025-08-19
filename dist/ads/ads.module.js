"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ads_service_1 = require("./ads.service");
const ads_controller_1 = require("./ads.controller");
const users_module_1 = require("../users/users.module");
const meta_module_1 = require("../meta/meta.module");
const campaign_entity_1 = require("../common/entities/campaign.entity");
const ad_set_entity_1 = require("../common/entities/ad-set.entity");
const ad_entity_1 = require("../common/entities/ad.entity");
const ad_copy_entity_1 = require("../common/entities/ad-copy.entity");
const ad_creative_entity_1 = require("../common/entities/ad-creative.entity");
let AdsModule = class AdsModule {
};
exports.AdsModule = AdsModule;
exports.AdsModule = AdsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([campaign_entity_1.CampaignEntity, ad_set_entity_1.AdSetEntity, ad_entity_1.AdEntity, ad_copy_entity_1.AdCopyEntity, ad_creative_entity_1.AdCreativeEntity]),
            users_module_1.UsersModule,
            meta_module_1.MetaModule
        ],
        controllers: [ads_controller_1.AdsController],
        providers: [ads_service_1.AdsService],
        exports: [ads_service_1.AdsService],
    })
], AdsModule);
//# sourceMappingURL=ads.module.js.map