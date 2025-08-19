import { AdCopyRequest, AdImageRequest } from 'src/common/interface/metaInterface';
import { AiService } from './ai.service';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    generateAdCopy(req: any, body: AdCopyRequest): Promise<import("../common/entities/ad-copy.entity").AdCopyEntity[]>;
    generateAdImage(req: any, body: AdImageRequest): Promise<import("../common/entities/ad-creative.entity").AdCreativeEntity>;
    getAdCopyHistory(req: any): Promise<import("../common/entities/ad-copy.entity").AdCopyEntity[]>;
    getAdCreativeHistory(req: any): Promise<import("../common/entities/ad-creative.entity").AdCreativeEntity[]>;
}
