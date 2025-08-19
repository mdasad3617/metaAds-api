import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsObject, IsEnum, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum AdSetStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  ARCHIVED = 'ARCHIVED',
}

export enum BidStrategy {
  LOWEST_COST_WITHOUT_CAP = 'LOWEST_COST_WITHOUT_CAP',
  LOWEST_COST_WITH_BID_CAP = 'LOWEST_COST_WITH_BID_CAP',
  TARGET_COST = 'TARGET_COST',
  COST_CAP = 'COST_CAP',
}

export class TargetingOptionsDto {
  @ApiProperty({})
  @IsOptional()
  @IsObject()
  ageRange?: { min: number; max: number };

  @ApiProperty({
    description: 'Gender targeting (1=male, 2=female)',
    type: 'array',
    items: { type: 'number' },
    example: [1, 2],
    required: false,
  })
  @IsOptional()
  genders?: number[];

  @ApiProperty({})
  @IsOptional()
  @IsObject()
  locations?: object;

  @ApiProperty({
    description: 'Interest targeting',
    type: 'array',
    items: { type: 'string' },
    example: ['Technology', 'Music', 'Sports'],
    required: false,
  })
  @IsOptional()
  interests?: string[];

  @ApiProperty({
    description: 'Behavior targeting',
    type: 'array',
    items: { type: 'string' },
    example: ['Frequent travelers', 'Online shoppers'],
    required: false,
  })
  @IsOptional()
  behaviors?: string[];

  @ApiProperty({
    description: 'Device targeting',
    type: 'array',
    items: { type: 'string' },
    example: ['mobile', 'desktop'],
    required: false,
  })
  @IsOptional()
  devices?: string[];
}

export class CreateAdSetDto {
  @ApiProperty({
    description: 'Ad set name',
    example: 'Summer Sale - Mobile Users',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Campaign ID this ad set belongs to',
    example: 'uuid-string',
  })
  @IsString()
  @IsNotEmpty()
  campaignId: string;

  @ApiProperty({
    description: 'Ad set description',
    example: 'Targeting mobile users for summer sale campaign',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Targeting options for the ad set',
    type: TargetingOptionsDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => TargetingOptionsDto)
  targetingOptions?: TargetingOptionsDto;

  @ApiProperty({
    description: 'Ad set budget in cents',
    example: 50000,
    minimum: 100,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(100)
  budget?: number;

  @ApiProperty({
    description: 'Bid strategy',
    enum: BidStrategy,
    example: BidStrategy.LOWEST_COST_WITHOUT_CAP,
    required: false,
  })
  @IsOptional()
  @IsEnum(BidStrategy)
  bidStrategy?: BidStrategy = BidStrategy.LOWEST_COST_WITHOUT_CAP;

  @ApiProperty({
    description: 'Ad set status',
    enum: AdSetStatus,
    example: AdSetStatus.DRAFT,
    required: false,
  })
  @IsOptional()
  @IsEnum(AdSetStatus)
  status?: AdSetStatus = AdSetStatus.DRAFT;

  @ApiProperty({
    description: 'Daily budget cap in cents',
    example: 5000,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(100)
  dailyBudgetCap?: number;
}