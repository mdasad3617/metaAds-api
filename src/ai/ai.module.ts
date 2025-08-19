import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { AdCopyEntity } from 'src/common/entities/ad-copy.entity';
import { AdCreativeEntity } from 'src/common/entities/ad-creative.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdCopyEntity, AdCreativeEntity])],
  controllers: [AiController],
  providers: [AiService],
  exports: [AiService],
})
export class AiModule {}