import { CreativeType } from '../enum/metaEnum';
import { UserEntity } from './user.entity';
import { AdEntity } from './ad.entity';
export declare class AdCreativeEntity {
    id: string;
    type: CreativeType;
    imageUrl?: string;
    videoUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    prompt?: string;
    aiModel?: string;
    style?: string;
    userId: string;
    user: UserEntity;
    ads: AdEntity[];
}
