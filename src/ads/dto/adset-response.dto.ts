import { ApiProperty } from '@nestjs/swagger';
import { AdSetStatus, BidStrategy, TargetingOptionsDto } from './create-adset.dto';

export class AdSetResponseDto {
  @ApiProperty({
    description: 'Ad set unique identifier',
    example: 'uuid-string',
  })
  id: string;

  @ApiProperty({
    description: 'Ad set name',
    example: 'Summer Sale - Mobile Users',
  })
  name: string;

  @ApiProperty({
    description: 'Campaign ID this ad set belongs to',
    example: 'uuid-string',
  })
  campaignId: string;

  @ApiProperty({
    description: 'Ad set description',
    example: 'Targeting mobile users for summer sale campaign',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Ad set status',
    enum: AdSetStatus,
  })
  status: AdSetStatus;

  @ApiProperty({
    description: 'Ad set budget in cents',
    example: 50000,
    required: false,
  })
  budget?: number;

  @ApiProperty({
    description: 'Bid strategy',
    enum: BidStrategy,
  })
  bidStrategy: BidStrategy;

  @ApiProperty({
    description: 'Targeting options',
    type: TargetingOptionsDto,
    required: false,
  })
  targetingOptions?: TargetingOptionsDto;

  @ApiProperty({
    description: 'Daily budget cap in cents',
    example: 5000,
    required: false,
  })
  dailyBudgetCap?: number;

  @ApiProperty({
    description: 'Meta ad set ID (if published)',
    example: '123456789',
    required: false,
  })
  metaAdSetId?: string;

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
    description: 'User ID who created the ad set',
    example: 'uuid-string',
  })
  userId: string;

  @ApiProperty({
    description: 'Number of ads in this ad set',
    example: 5,
    required: false,
  })
  adsCount?: number;
}