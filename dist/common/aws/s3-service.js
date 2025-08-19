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
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const uuid_1 = require("uuid");
let S3Service = class S3Service {
    constructor() {
        AWS.config.update({
            region: process.env.AWS_REGION || 'ap-south-1',
        });
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_S3_ACCESS_KEY,
            secretAccessKey: process.env.AWS_S3_KEY_SECRET,
            region: process.env.AWS_REGION || 'ap-south-1',
        });
        this.bucket = process.env.AWS_S3_BUCKET;
    }
    async uploadFile(file) {
        const key = `${(0, uuid_1.v4)()}-${Date.now()}-${file.originalname}`;
        return this.uploadBuffer(file.buffer, key, file.mimetype);
    }
    async uploadFileBuffer(buffer, options) {
        return this.uploadBuffer(buffer, options.filename, options.mimetype);
    }
    async uploadBuffer(buffer, key, contentType) {
        const params = {
            Bucket: this.bucket,
            Key: key,
            Body: buffer,
            ACL: 'public-read',
            ContentType: contentType,
        };
        try {
            const result = await this.s3.upload(params).promise();
            return result.Location;
        }
        catch (error) {
            console.error('S3 Upload Error:', error);
            throw new common_1.InternalServerErrorException('Failed to upload file to S3');
        }
    }
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
//# sourceMappingURL=s3-service.js.map