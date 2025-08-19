import { ApiProperty } from '@nestjs/swagger';
import { CampaignStatus, CampaignObjective } from './create-campaign.dto';

export class CampaignResponseDto {
  @ApiProperty({
    description: 'Campaign unique identifier',
    example: 'uuid-string',
  })
  id: string;

  @ApiProperty({
    description: 'Campaign name',
    example: 'Summer Sale Campaign 2024',
  })
  name: string;

  @ApiProperty({
    description: 'Campaign objective',
    enum: CampaignObjective,
  })
  objective: CampaignObjective;

  @ApiProperty({
    description: 'Campaign description',
    example: 'Promoting summer collection with special discounts',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Campaign status',
    enum: CampaignStatus,
  })
  status: CampaignStatus;

  @ApiProperty({
    description: 'Campaign budget in cents',
    example: 100000,
    required: false,
  })
  budget?: number;

  @ApiProperty({
    description: 'Campaign start date',
    example: '2024-06-01',
    required: false,
  })
  startDate?: string;

  @ApiProperty({
    description: 'Campaign end date',
    example: '2024-08-31',
    required: false,
  })
  endDate?: string;

  @ApiProperty({
    description: 'Target audience description',
    example: 'Young adults aged 18-35 interested in fashion',
    required: false,
  })
  targetAudience?: string;

  @ApiProperty({
    description: 'Meta campaign ID (if published)',
    example: '123456789',
    required: false,
  })
  metaCampaignId?: string;

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
    description: 'User ID who created the campaign',
    example: 'uuid-string',
  })
  userId: string;

  @ApiProperty({
    description: 'Number of ad sets in this campaign',
    example: 3,
    required: false,
  })
  adSetsCount?: number;

  @ApiProperty({
    description: 'Number of ads in this campaign',
    example: 8,
    required: false,
  })
  adsCount?: number;
}

export class PublishCampaignResponseDto {
  @ApiProperty({
    description: 'Operation success status',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Meta campaign ID',
    example: '123456789',
  })
  metaCampaignId: string;

  @ApiProperty({
    description: 'Success message',
    example: 'Campaign published to Meta successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Updated campaign data',
    type: CampaignResponseDto,
  })
  campaign: CampaignResponseDto;
}