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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const ads_service_1 = require("./ads.service");
let AdsController = class AdsController {
    constructor(adsService) {
        this.adsService = adsService;
    }
    async createCampaign(req, body) {
        return this.adsService.createCampaign(req.user.userId, body);
    }
    async publishCampaign(req, campaignId) {
        return this.adsService.publishCampaignToMeta(req.user.userId, campaignId);
    }
    async createAdSet(req, body) {
        return this.adsService.createAdSet(req.user.userId, body);
    }
    async createAd(req, body) {
        return this.adsService.createAd(req.user.userId, body);
    }
    async getCampaigns(req) {
        return this.adsService.getCampaigns(req.user.userId);
    }
    async getCampaignById(req, campaignId) {
        return this.adsService.getCampaignById(req.user.userId, campaignId);
    }
    async getMetaAdAccounts(req) {
        return this.adsService.getMetaAdAccounts(req.user.userId);
    }
};
exports.AdsController = AdsController;
__decorate([
    (0, common_1.Post)('campaigns'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "createCampaign", null);
__decorate([
    (0, common_1.Post)('campaigns/:id/publish'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "publishCampaign", null);
__decorate([
    (0, common_1.Post)('adsets'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "createAdSet", null);
__decorate([
    (0, common_1.Post)('ads'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "createAd", null);
__decorate([
    (0, common_1.Get)('campaigns'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "getCampaigns", null);
__decorate([
    (0, common_1.Get)('campaigns/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "getCampaignById", null);
__decorate([
    (0, common_1.Get)('meta/adaccounts'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "getMetaAdAccounts", null);
exports.AdsController = AdsController = __decorate([
    (0, common_1.Controller)('ads'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [ads_service_1.AdsService])
], AdsController);
//# sourceMappingURL=ads.controller.js.map