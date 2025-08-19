import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsArray, IsNumber, IsDateString, Min } from 'class-validator';

export enum CampaignObjective {
  OUTCOME_AWARENESS = 'OUTCOME_AWARENESS',
  OUTCOME_TRAFFIC = 'OUTCOME_TRAFFIC',
  OUTCOME_ENGAGEMENT = 'OUTCOME_ENGAGEMENT',
  OUTCOME_LEADS = 'OUTCOME_LEADS',
  OUTCOME_APP_PROMOTION = 'OUTCOME_APP_PROMOTION',
  OUTCOME_SALES = 'OUTCOME_SALES',
}

export enum CampaignStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  DELETED = 'DELETED',
  ARCHIVED = 'ARCHIVED',
}

export enum BuyingType {
  AUCTION = 'AUCTION',
  RESERVED = 'RESERVED',
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
    example: CampaignObjective.OUTCOME_SALES,
  })
  @IsEnum(CampaignObjective)
  objective: CampaignObjective;

  @ApiProperty({
    description: 'Campaign status',
    enum: CampaignStatus,
    example: CampaignStatus.PAUSED,
    required: false,
  })
  @IsEnum(CampaignStatus)
  @IsOptional()
  status?: CampaignStatus = CampaignStatus.PAUSED;

  @ApiProperty({
    description: 'Special ad categories',
    type: [String],
    example: [],
    required: false,
  })
  @IsArray()
  @IsOptional()
  special_ad_categories?: string[] = [];

  @ApiProperty({
    description: 'Buying type',
    enum: BuyingType,
    example: BuyingType.AUCTION,
    required: false,
  })
  @IsEnum(BuyingType)
  @IsOptional()
  buying_type?: BuyingType = BuyingType.AUCTION;
}

export class UpdateCampaignStatusDto {
  @ApiProperty({
    description: 'New campaign status',
    enum: CampaignStatus,
    example: CampaignStatus.ACTIVE,
  })
  @IsEnum(CampaignStatus)
  status: CampaignStatus;
}

export class CampaignInsightsQueryDto {
  @ApiProperty({
    description: 'Start date for insights (YYYY-MM-DD)',
    example: '2024-01-01',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  since?: string;

  @ApiProperty({
    description: 'End date for insights (YYYY-MM-DD)',
    example: '2024-01-31',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  until?: string;
}

export class CampaignResponseDto {
  @ApiProperty({ example: '123456789' })
  id: string;

  @ApiProperty({ example: 'Summer Sale Campaign 2024' })
  name: string;

  @ApiProperty({ enum: CampaignObjective })
  objective: CampaignObjective;

  @ApiProperty({ enum: CampaignStatus })
  status: CampaignStatus;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  created_time: string;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  updated_time: string;
}

export class CampaignInsightsDto {
  @ApiProperty({ example: '12345', description: 'Number of impressions' })
  impressions?: string;

  @ApiProperty({ example: '567', description: 'Number of clicks' })
  clicks?: string;

  @ApiProperty({ example: '123.45', description: 'Amount spent' })
  spend?: string;

  @ApiProperty({ example: '4.59', description: 'Click-through rate' })
  ctr?: string;

  @ApiProperty({ example: '10.00', description: 'Cost per mille (thousand impressions)' })
  cpm?: string;

  @ApiProperty({ example: '0.22', description: 'Cost per click' })
  cpp?: string;

  @ApiProperty({ example: '8900', description: 'Reach' })
  reach?: string;

  @ApiProperty({ example: '1.39', description: 'Frequency' })
  frequency?: string;

  @ApiProperty({ type: 'array', items: { type: 'object' }, description: 'Actions taken' })
  actions?: object[];

  @ApiProperty({ type: 'array', items: { type: 'object' }, description: 'Cost per action type' })
  cost_per_action_type?: object[];
}