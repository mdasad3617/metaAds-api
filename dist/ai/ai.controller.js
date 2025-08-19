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
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const ai_service_1 = require("./ai.service");
const dto_1 = require("./dto");
let AiController = class AiController {
    constructor(aiService) {
        this.aiService = aiService;
    }
    async generateAdCopy(req, body) {
        return this.aiService.generateAdCopy(req.user.userId, body);
    }
    async generateAdImage(req, body) {
        return this.aiService.generateAdImage(req.user.userId, body);
    }
    async getAdCopyHistory(req) {
        return this.aiService.getAdCopyHistory(req.user.userId);
    }
    async getAdCreativeHistory(req) {
        return this.aiService.getAdCreativeHistory(req.user.userId);
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)('generate-copy'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Generate AI-powered ad copy' }),
    (0, swagger_1.ApiBody)({ type: dto_1.GenerateAdCopyDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Ad copy generated successfully',
        type: dto_1.AdCopyResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid request data',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.GenerateAdCopyDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateAdCopy", null);
__decorate([
    (0, common_1.Post)('generate-image'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Generate AI-powered ad images' }),
    (0, swagger_1.ApiBody)({ type: dto_1.GenerateAdImageDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Ad image generated successfully',
        type: dto_1.AdImageResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid request data',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.GenerateAdImageDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateAdImage", null);
__decorate([
    (0, common_1.Get)('copy-history'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user\'s ad copy generation history' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Ad copy history retrieved successfully',
        type: dto_1.AdCopyHistoryDto,
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "getAdCopyHistory", null);
__decorate([
    (0, common_1.Get)('creative-history'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user\'s ad creative generation history' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Ad creative history retrieved successfully',
        type: dto_1.AdImageHistoryDto,
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "getAdCreativeHistory", null);
exports.AiController = AiController = __decorate([
    (0, swagger_1.ApiTags)('AI'),
    (0, common_1.Controller)('ai'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], AiController);
//# sourceMappingURL=ai.controller.js.map