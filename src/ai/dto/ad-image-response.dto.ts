import { ApiProperty } from '@nestjs/swagger';

export class AdImageResponseDto {
  @ApiProperty({
    description: 'Generated ad image ID',
    example: 'uuid-string',
  })
  id: string;

  @ApiProperty({
    description: 'Product name used for generation',
    example: 'Wireless Bluetooth Headphones',
  })
  productName: string;

  @ApiProperty({
    description: 'Generated image URL',
    example: 'https://example.com/images/generated-ad-image.jpg',
  })
  imageUrl: string;

  @ApiProperty({
    description: 'Image generation prompt used',
    example: 'Modern wireless bluetooth headphones on clean white background with soft lighting',
  })
  prompt: string;

  @ApiProperty({})
  dimensions: {
    width: number;
    height: number;
    aspectRatio: string;
  };

  @ApiProperty({})
  parameters: object;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-01-01T00:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User ID who generated the image',
    example: 'uuid-string',
  })
  userId: string;

  @ApiProperty({
    description: 'Image file size in bytes',
    example: 245760,
    required: false,
  })
  fileSize?: number;

  @ApiProperty({
    description: 'Image format',
    example: 'JPEG',
    required: false,
  })
  format?: string;
}

export class AdImageHistoryDto {
  @ApiProperty({
    description: 'List of generated ad images',
    type: [AdImageResponseDto],
  })
  data: AdImageResponseDto[];

  @ApiProperty({
    description: 'Total count of generated images',
    example: 15,
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