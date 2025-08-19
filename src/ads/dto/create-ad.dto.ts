import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsUUID } from 'class-validator';

export enum AdStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  ARCHIVED = 'ARCHIVED',
}

export enum AdType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL = 'CAROUSEL',
  COLLECTION = 'COLLECTION',
}

export class CreateAdDto {
  @ApiProperty({
    description: 'Ad name',
    example: 'Summer Sale - Wireless Headphones',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Ad set ID this ad belongs to',
    example: 'uuid-string',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  adSetId: string;

  @ApiProperty({
    description: 'Ad description',
    example: 'Promoting wireless headphones with summer discount',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Ad copy ID to use for this ad',
    example: 'uuid-string',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsUUID()
  adCopyId?: string;

  @ApiProperty({
    description: 'Ad creative ID to use for this ad',
    example: 'uuid-string',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsUUID()
  adCreativeId?: string;

  @ApiProperty({
    description: 'Ad type',
    enum: AdType,
    example: AdType.IMAGE,
    required: false,
  })
  @IsOptional()
  @IsEnum(AdType)
  adType?: AdType = AdType.IMAGE;

  @ApiProperty({
    description: 'Ad status',
    enum: AdStatus,
    example: AdStatus.DRAFT,
    required: false,
  })
  @IsOptional()
  @IsEnum(AdStatus)
  status?: AdStatus = AdStatus.DRAFT;

  @ApiProperty({
    description: 'Landing page URL',
    example: 'https://example.com/products/wireless-headphones',
    required: false,
  })
  @IsOptional()
  @IsString()
  landingPageUrl?: string;

  @ApiProperty({
    description: 'Call-to-action button text',
    example: 'Shop Now',
    required: false,
  })
  @IsOptional()
  @IsString()
  callToAction?: string;
}