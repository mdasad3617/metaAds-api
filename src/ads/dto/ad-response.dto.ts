import { ApiProperty } from '@nestjs/swagger';
import { AdStatus, AdType } from './create-ad.dto';
import { IsObject } from 'class-validator';

export class AdResponseDto {
  @ApiProperty({
    description: 'Ad unique identifier',
    example: 'uuid-string',
  })
  id: string;

  @ApiProperty({
    description: 'Ad name',
    example: 'Summer Sale - Wireless Headphones',
  })
  name: string;

  @ApiProperty({
    description: 'Ad set ID this ad belongs to',
    example: 'uuid-string',
  })
  adSetId: string;

  @ApiProperty({
    description: 'Campaign ID this ad belongs to',
    example: 'uuid-string',
  })
  campaignId: string;

  @ApiProperty({
    description: 'Ad description',
    example: 'Promoting wireless headphones with summer discount',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Ad status',
    enum: AdStatus,
  })
  status: AdStatus;

  @ApiProperty({
    description: 'Ad type',
    enum: AdType,
  })
  adType: AdType;

  @ApiProperty({
    description: 'Ad copy ID used for this ad',
    example: 'uuid-string',
    required: false,
  })
  adCopyId?: string;

  @ApiProperty({
    description: 'Ad creative ID used for this ad',
    example: 'uuid-string',
    required: false,
  })
  adCreativeId?: string;

  @ApiProperty({
    description: 'Landing page URL',
    example: 'https://example.com/products/wireless-headphones',
    required: false,
  })
  landingPageUrl?: string;

  @ApiProperty({
    description: 'Call-to-action button text',
    example: 'Shop Now',
    required: false,
  })
  callToAction?: string;

  @ApiProperty({
    description: 'Meta ad ID (if published)',
    example: '123456789',
    required: false,
  })
  metaAdId?: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-01-01T00:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-01-01T00:00:00Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'User ID who created the ad',
    example: 'uuid-string',
  })
  userId: string;

  @ApiProperty({})
  @IsObject()
  adCopy?: object;

  @ApiProperty({})
  @IsObject()
  adCreative?: object;
}