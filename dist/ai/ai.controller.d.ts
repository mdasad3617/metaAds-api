import { AiService } from './ai.service';
import { GenerateAdCopyDto, GenerateAdImageDto } from './dto';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    generateAdCopy(req: any, body: GenerateAdCopyDto): Promise<import("../common/entities/ad-copy.entity").AdCopyEntity[]>;
    generateAdImage(req: any, body: GenerateAdImageDto): Promise<import("../common/entities/ad-creative.entity").AdCreativeEntity>;
    getAdCopyHistory(req: any): Promise<import("../common/entities/ad-copy.entity").AdCopyEntity[]>;
    getAdCreativeHistory(req: any): Promise<import("../common/entities/ad-creative.entity").AdCreativeEntity[]>;
}
