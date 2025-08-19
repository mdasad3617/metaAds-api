import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsService } from './ads.service';
import { AdsController } from './ads.controller';
import { UsersModule } from '../users/users.module';
import { MetaModule } from '../meta/meta.module';
import { CampaignEntity } from 'src/common/entities/campaign.entity';
import { AdSetEntity } from 'src/common/entities/ad-set.entity';
import { AdEntity } from 'src/common/entities/ad.entity';
import { AdCopyEntity } from 'src/common/entities/ad-copy.entity';
import { AdCreativeEntity } from 'src/common/entities/ad-creative.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CampaignEntity, AdSetEntity, AdEntity, AdCopyEntity, AdCreativeEntity]),
    UsersModule, 
    MetaModule
  ],
  controllers: [AdsController],
  providers: [AdsService],
  exports: [AdsService],
})
export class AdsModule {}