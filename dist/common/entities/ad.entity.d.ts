import { AdStatus } from '../enum/metaEnum';
import { AdSetEntity } from './ad-set.entity';
import { AdCopyEntity } from './ad-copy.entity';
import { AdCreativeEntity } from './ad-creative.entity';
export declare class AdEntity {
    id: string;
    name: string;
    status: AdStatus;
    createdAt: Date;
    updatedAt: Date;
    metaAdId?: string;
    adSetId: string;
    adSet: AdSetEntity;
    adCopyId?: string;
    adCopy?: AdCopyEntity;
    adCreativeId?: string;
    adCreative?: AdCreativeEntity;
}
