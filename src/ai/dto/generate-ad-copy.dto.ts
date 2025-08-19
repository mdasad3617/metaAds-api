import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, Max, IsEnum } from 'class-validator';

export enum AdTone {
  PROFESSIONAL = 'professional',
  CASUAL = 'casual',
  FRIENDLY = 'friendly',
  URGENT = 'urgent',
  LUXURY = 'luxury',
  PLAYFUL = 'playful',
}

export enum AdObjective {
  AWARENESS = 'awareness',
  TRAFFIC = 'traffic',
  ENGAGEMENT = 'engagement',
  LEADS = 'leads',
  SALES = 'sales',
  APP_PROMOTION = 'app_promotion',
}

export class GenerateAdCopyDto {
  @ApiProperty({
    description: 'Product or service name',
    example: 'Wireless Bluetooth Headphones',
  })
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty({
    description: 'Detailed product description',
    example: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.',
  })
  @IsString()
  @IsNotEmpty()
  productDescription: string;

  @ApiProperty({
    description: 'Target audience description',
    example: 'Tech-savvy professionals aged 25-40 who value quality audio and convenience',
  })
  @IsString()
  @IsNotEmpty()
  targetAudience: string;

  @ApiProperty({
    description: 'Primary advertising objective',
    enum: AdObjective,
    example: AdObjective.SALES,
  })
  @IsEnum(AdObjective)
  adObjective: AdObjective;

  @ApiProperty({
    description: 'Tone of voice for the ad copy',
    enum: AdTone,
    example: AdTone.PROFESSIONAL,
    required: false,
  })
  @IsOptional()
  @IsEnum(AdTone)
  tone?: AdTone = AdTone.PROFESSIONAL;

  @ApiProperty({
    description: 'Number of copy variations to generate',
    example: 3,
    minimum: 1,
    maximum: 5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  variations?: number = 3;

  @ApiProperty({
    description: 'Additional context or special requirements',
    example: 'Emphasize the eco-friendly packaging and free shipping',
    required: false,
  })
  @IsOptional()
  @IsString()
  additionalContext?: string;
}