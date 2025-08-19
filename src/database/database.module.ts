import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/common/entities/user.entity';
import { CampaignEntity } from 'src/common/entities/campaign.entity';
import { AdSetEntity } from 'src/common/entities/ad-set.entity';
import { AdEntity } from 'src/common/entities/ad.entity';
import { AdCopyEntity } from 'src/common/entities/ad-copy.entity';
import { AdCreativeEntity } from 'src/common/entities/ad-creative.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE', 'metaAds'),
        entities: [UserEntity, CampaignEntity, AdSetEntity, AdEntity, AdCopyEntity, AdCreativeEntity],
        synchronize: configService.get('NODE_ENV') === 'development',
        logging: configService.get('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}