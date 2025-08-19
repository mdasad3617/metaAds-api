import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDateString, IsEnum, Min } from 'class-validator';

export enum CampaignObjective {
  AWARENESS = 'AWARENESS',
  TRAFFIC = 'TRAFFIC',
  ENGAGEMENT = 'ENGAGEMENT',
  LEADS = 'LEADS',
  APP_PROMOTION = 'APP_PROMOTION',
  SALES = 'SALES',
  CONVERSIONS = 'CONVERSIONS',
}

export enum CampaignStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED',
}

export class CreateCampaignDto {
  @ApiProperty({
    description: 'Campaign name',
    example: 'Summer Sale Campaign 2024',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Campaign objective',
    enum: CampaignObjective,
    example: CampaignObjective.SALES,
  })
  @IsEnum(CampaignObjective)
  objective: CampaignObjective;

  @ApiProperty({
    description: 'Campaign description',
    example: 'Promoting summer collection with special discounts',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Campaign budget in cents',
    example: 100000,
    minimum: 100,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(100)
  budget?: number;

  @ApiProperty({
    description: 'Campaign start date',
    example: '2024-06-01',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({
    description: 'Campaign end date',
    example: '2024-08-31',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({
    description: 'Campaign status',
    enum: CampaignStatus,
    example: CampaignStatus.DRAFT,
    required: false,
  })
  @IsOptional()
  @IsEnum(CampaignStatus)
  status?: CampaignStatus = CampaignStatus.DRAFT;

  @ApiProperty({
    description: 'Target audience description',
    example: 'Young adults aged 18-35 interested in fashion',
    required: false,
  })
  @IsOptional()
  @IsString()
  targetAudience?: string;
}