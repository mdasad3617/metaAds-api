import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateMetaIntegrationDto {
  @ApiProperty({
    description: 'Meta access token',
    example: 'EAABwzLixnjYBO...',
    required: false,
  })
  @IsOptional()
  @IsString()
  metaAccessToken?: string;

  @ApiProperty({
    description: 'Meta refresh token',
    example: 'EAABwzLixnjYBO...',
    required: false,
  })
  @IsOptional()
  @IsString()
  metaRefreshToken?: string;

  @ApiProperty({
    description: 'Meta token expiration date',
    example: '2024-12-31T23:59:59Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  metaTokenExpiresAt?: Date;

  @ApiProperty({
    description: 'Meta user ID',
    example: '123456789',
    required: false,
  })
  @IsOptional()
  @IsString()
  metaUserId?: string;

  @ApiProperty({
    description: 'Meta ad account ID',
    example: 'act_123456789',
    required: false,
  })
  @IsOptional()
  @IsString()
  metaAdAccountId?: string;
}