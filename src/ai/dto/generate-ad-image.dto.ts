import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export enum ImageStyle {
  REALISTIC = 'realistic',
  MINIMALIST = 'minimalist',
  MODERN = 'modern',
  VINTAGE = 'vintage',
  ABSTRACT = 'abstract',
  LIFESTYLE = 'lifestyle',
  PRODUCT_FOCUS = 'product_focus',
}

export enum AspectRatio {
  SQUARE = '1:1',
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16',
  STORY = '9:16',
  FEED = '4:5',
}

export class GenerateAdImageDto {
  @ApiProperty({
    description: 'Product or service name',
    example: 'Wireless Bluetooth Headphones',
  })
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty({
    description: 'Detailed product description',
    example: 'Premium wireless headphones with active noise cancellation and sleek black design',
  })
  @IsString()
  @IsNotEmpty()
  productDescription: string;

  @ApiProperty({
    description: 'Visual style for the generated image',
    enum: ImageStyle,
    example: ImageStyle.MODERN,
    required: false,
  })
  @IsOptional()
  @IsEnum(ImageStyle)
  style?: ImageStyle = ImageStyle.MODERN;

  @ApiProperty({
    description: 'Image aspect ratio',
    enum: AspectRatio,
    example: AspectRatio.SQUARE,
    required: false,
  })
  @IsOptional()
  @IsEnum(AspectRatio)
  aspectRatio?: AspectRatio = AspectRatio.SQUARE;

  @ApiProperty({
    description: 'Background setting or environment',
    example: 'Clean white studio background with soft lighting',
    required: false,
  })
  @IsOptional()
  @IsString()
  background?: string;

  @ApiProperty({
    description: 'Additional visual elements or requirements',
    example: 'Include lifestyle elements like a modern workspace',
    required: false,
  })
  @IsOptional()
  @IsString()
  additionalElements?: string;
}