import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsObject, IsNumber, Min, ValidateNested, isObject } from 'class-validator';
import { Type } from 'class-transformer';

export enum AdSetStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  DELETED = 'DELETED',
  ARCHIVED = 'ARCHIVED',
}

export enum BillingEvent {
  IMPRESSIONS = 'IMPRESSIONS',
  CLICKS = 'CLICKS',
  ACTIONS = 'ACTIONS',
  THRUPLAY = 'THRUPLAY',
}

export enum OptimizationGoal {
  REACH = 'REACH',
  IMPRESSIONS = 'IMPRESSIONS',
  CLICKS = 'CLICKS',
  ACTIONS = 'ACTIONS',
  UNIQUE_CLICKS = 'UNIQUE_CLICKS',
  LINK_CLICKS = 'LINK_CLICKS',
  POST_ENGAGEMENT = 'POST_ENGAGEMENT',
  PAGE_LIKES = 'PAGE_LIKES',
  EVENT_RESPONSES = 'EVENT_RESPONSES',
  CONVERSIONS = 'CONVERSIONS',
  APP_INSTALLS = 'APP_INSTALLS',
  APP_EVENTS = 'APP_EVENTS',
  OFFSITE_CONVERSIONS = 'OFFSITE_CONVERSIONS',
  THRUPLAY = 'THRUPLAY',
  LANDING_PAGE_VIEWS = 'LANDING_PAGE_VIEWS',
  QUALITY_CALL = 'QUALITY_CALL',
  QUALITY_LEAD = 'QUALITY_LEAD',
}

export class TargetingDto {
  @ApiProperty({ })
  @IsObject()
  @IsOptional()
  geo_locations?: object;

  @ApiProperty({ })
  @IsObject()
  @IsOptional()
  age_range?: { min: number; max: number };

  @ApiProperty({
    description: 'Gender targeting',
    type: 'array',
    items: { type: 'number' },
    example: [1, 2],
    required: false,
  })
  @IsOptional()
  genders?: number[];

  @ApiProperty({
    description: 'Interest targeting',
    type: 'array',
    items: { type: 'object' },
    example: [{ id: '6003107902433', name: 'Association football (Soccer)' }],
    required: false,
  })
  @IsOptional()
  interests?: object[];

  @ApiProperty({
    description: 'Behavior targeting',
    type: 'array',
    items: { type: 'object' },
    example: [{ id: '6002714895372', name: 'All travelers' }],
    required: false,
  })
  @IsOptional()
  behaviors?: object[];

  @ApiProperty({
    description: 'Custom audiences',
    type: 'array',
    items: { type: 'string' },
    example: ['123456789'],
    required: false,
  })
  @IsOptional()
  custom_audiences?: string[];

  @ApiProperty({
    description: 'Excluded custom audiences',
    type: 'array',
    items: { type: 'string' },
    example: ['987654321'],
    required: false,
  })
  @IsOptional()
  excluded_custom_audiences?: string[];
}

export class CreateAdSetDto {
  @ApiProperty({
    description: 'Ad set name',
    example: 'Summer Sale AdSet - Mobile Users',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Campaign ID this ad set belongs to',
    example: '123456789',
  })
  @IsString()
  @IsNotEmpty()
  campaign_id: string;

  @ApiProperty({
    description: 'Targeting options for the ad set',
    type: TargetingDto,
  })
  @ValidateNested()
  @Type(() => TargetingDto)
  @IsObject()
  targeting: TargetingDto;

  @ApiProperty({
    description: 'Billing event',
    enum: BillingEvent,
    example: BillingEvent.IMPRESSIONS,
    required: false,
  })
  @IsEnum(BillingEvent)
  @IsOptional()
  billing_event?: BillingEvent = BillingEvent.IMPRESSIONS;

  @ApiProperty({
    description: 'Optimization goal',
    enum: OptimizationGoal,
    example: OptimizationGoal.REACH,
    required: false,
  })
  @IsEnum(OptimizationGoal)
  @IsOptional()
  optimization_goal?: OptimizationGoal = OptimizationGoal.REACH;

  @ApiProperty({
    description: 'Bid amount in cents',
    example: 100,
    required: false,
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  bid_amount?: number;

  @ApiProperty({
    description: 'Daily budget in cents',
    example: 1000,
    required: false,
  })
  @IsNumber()
  @Min(100)
  @IsOptional()
  daily_budget?: number;

  @ApiProperty({
    description: 'Lifetime budget in cents',
    example: 10000,
    required: false,
  })
  @IsNumber()
  @Min(100)
  @IsOptional()
  lifetime_budget?: number;

  @ApiProperty({
    description: 'Ad set status',
    enum: AdSetStatus,
    example: AdSetStatus.PAUSED,
    required: false,
  })
  @IsEnum(AdSetStatus)
  @IsOptional()
  status?: AdSetStatus = AdSetStatus.PAUSED;
}

export class AdSetResponseDto {
  @ApiProperty({ example: '123456789' })
  id: string;

  @ApiProperty({ example: 'Summer Sale AdSet - Mobile Users' })
  name: string;

  @ApiProperty({ example: '987654321' })
  campaign_id: string;

  @ApiProperty({ enum: AdSetStatus })
  status: AdSetStatus;

  @ApiProperty({ enum: BillingEvent })
  billing_event: BillingEvent;

  @ApiProperty({ enum: OptimizationGoal })
  optimization_goal: OptimizationGoal;

  @ApiProperty({ example: '1000' })
  daily_budget?: string;

  @ApiProperty({ example: '10000' })
  lifetime_budget?: string;

  @ApiProperty({})
  @IsObject()
  targeting: object;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  created_time: string;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  updated_time: string;
}