import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsObject, ValidateNested, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export enum AdStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  DELETED = 'DELETED',
  ARCHIVED = 'ARCHIVED',
}

export class ObjectStorySpecDto {
  @ApiProperty({
    description: 'Page ID for the ad',
    example: '123456789',
  })
  @IsString()
  @IsNotEmpty()
  page_id: string;

  @ApiProperty({})
  @IsObject()
  @IsOptional()
  link_data?: {
    link: string;
    message?: string;
    name?: string;
    description?: string;
    call_to_action?: {
      type: string;
      value: {
        link: string;
      };
    };
  };

  @ApiProperty({})
  @IsObject()
  @IsOptional()
  photo_data?: {
    image_hash: string;
    message?: string;
    call_to_action?: {
      type: string;
      value: {
        link: string;
      };
    };
  };

  @ApiProperty({})
  @IsObject()
  @IsOptional()
  video_data?: {
    video_id: string;
    message?: string;
    call_to_action?: {
      type: string;
      value: {
        link: string;
      };
    };
  };
}

export class AdCreativeDto {
  @ApiProperty({
    description: 'Creative name',
    example: 'Summer Sale Creative',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Object story specification',
    type: ObjectStorySpecDto,
  })
  @ValidateNested()
  @Type(() => ObjectStorySpecDto)
  @IsObject()
  object_story_spec: ObjectStorySpecDto;
}

export class CreateAdCreativeDto {
  @ApiProperty({
    description: 'Creative name',
    example: 'Summer Sale Creative',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Object story specification',
    type: ObjectStorySpecDto,
  })
  @ValidateNested()
  @Type(() => ObjectStorySpecDto)
  @IsObject()
  object_story_spec: ObjectStorySpecDto;

  @ApiProperty({})
  @IsObject()
  @IsOptional()
  degrees_of_freedom_spec?: object;
}

export class CreateAdDto {
  @ApiProperty({
    description: 'Ad name',
    example: 'Summer Sale Ad - Mobile',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Ad set ID this ad belongs to',
    example: '123456789',
  })
  @IsString()
  @IsNotEmpty()
  adset_id: string;

  @ApiProperty({
    description: 'Ad creative configuration',
    type: AdCreativeDto,
  })
  @ValidateNested()
  @Type(() => AdCreativeDto)
  @IsObject()
  creative: AdCreativeDto;

  @ApiProperty({
    description: 'Ad status',
    enum: AdStatus,
    example: AdStatus.PAUSED,
    required: false,
  })
  @IsEnum(AdStatus)
  @IsOptional()
  status?: AdStatus = AdStatus.PAUSED;
}

export class AdResponseDto {
  @ApiProperty({ example: '123456789' })
  id: string;

  @ApiProperty({ example: 'Summer Sale Ad - Mobile' })
  name: string;

  @ApiProperty({ example: '987654321' })
  adset_id: string;

  @ApiProperty({ example: '456789123' })
  campaign_id: string;

  @ApiProperty({ enum: AdStatus })
  status: AdStatus;

  @ApiProperty({ })
  @IsObject()
  creative: object;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  created_time: string;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  updated_time: string;
}

export class AdCreativeResponseDto {
  @ApiProperty({ example: '123456789' })
  id: string;

  @ApiProperty({ example: 'Summer Sale Creative' })
  name: string;

  @ApiProperty({})
  @IsObject()
  object_story_spec: object;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  created_time: string;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  updated_time: string;
}