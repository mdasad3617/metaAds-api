import { ApiProperty } from '@nestjs/swagger';

export class AdCopyVariationDto {
  @ApiProperty({
    description: 'Ad headline',
    example: 'Experience Premium Sound Like Never Before',
  })
  headline: string;

  @ApiProperty({
    description: 'Ad description/body text',
    example: 'Discover wireless freedom with our premium Bluetooth headphones. Active noise cancellation meets 30-hour battery life.',
  })
  description: string;

  @ApiProperty({
    description: 'Call-to-action text',
    example: 'Shop Now',
  })
  callToAction: string;

  @ApiProperty({
    description: 'Primary text for the ad',
    example: 'Transform your audio experience with cutting-edge technology.',
    required: false,
  })
  primaryText?: string;
}

export class AdCopyResponseDto {
  @ApiProperty({
    description: 'Generated ad copy ID',
    example: 'uuid-string',
  })
  id: string;

  @ApiProperty({
    description: 'Product name used for generation',
    example: 'Wireless Bluetooth Headphones',
  })
  productName: string;

  @ApiProperty({
    description: 'Generated ad copy variations',
    type: [AdCopyVariationDto],
  })
  copies: AdCopyVariationDto[];

  @ApiProperty({})
  parameters: object;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-01-01T00:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User ID who generated the copy',
    example: 'uuid-string',
  })
  userId: string;
}

export class AdCopyHistoryDto {
  @ApiProperty({
    description: 'List of generated ad copies',
    type: [AdCopyResponseDto],
  })
  data: AdCopyResponseDto[];

  @ApiProperty({
    description: 'Total count of generated copies',
    example: 25,
  })
  total: number;

  @ApiProperty({
    description: 'Current page number',
    example: 1,
  })
  page: number;

  @ApiProperty({
    description: 'Items per page',
    example: 10,
  })
  limit: number;
}