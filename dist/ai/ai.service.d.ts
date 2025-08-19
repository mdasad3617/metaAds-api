import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { AdCopyRequest, AdImageRequest } from 'src/common/interface/metaInterface';
import { AdCopyEntity } from 'src/common/entities/ad-copy.entity';
import { AdCreativeEntity } from 'src/common/entities/ad-creative.entity';
export declare class AiService {
    private configService;
    private adCopyRepository;
    private adCreativeRepository;
    private genAI;
    constructor(configService: ConfigService, adCopyRepository: Repository<AdCopyEntity>, adCreativeRepository: Repository<AdCreativeEntity>);
    generateAdCopy(userId: string, request: AdCopyRequest): Promise<AdCopyEntity[]>;
    generateAdImage(userId: string, request: AdImageRequest): Promise<AdCreativeEntity>;
    getAdCopyHistory(userId: string): Promise<AdCopyEntity[]>;
    getAdCreativeHistory(userId: string): Promise<AdCreativeEntity[]>;
}
