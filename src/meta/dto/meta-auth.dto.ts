import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUrl, IsObject } from 'class-validator';

export class ConnectMetaDto {
  @ApiProperty({
    description: 'Authorization code received from Meta OAuth',
    example: 'AQBhAGVhc...',
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    description: 'Redirect URI used in OAuth flow',
    example: 'http://localhost:3000/auth/meta/callback',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  redirectUri: string;
}

export class MetaAuthUrlDto {
  @ApiProperty({
    description: 'Redirect URI for OAuth callback',
    example: 'http://localhost:3000/auth/meta/callback',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  redirect_uri: string;

  @ApiProperty({
    description: 'State parameter for OAuth security',
    example: 'random_state_string',
    required: false,
  })
  @IsString()
  @IsOptional()
  state?: string;
}

export class UpdateAdAccountDto {
  @ApiProperty({
    description: 'Meta Ad Account ID',
    example: 'act_123456789',
  })
  @IsString()
  @IsNotEmpty()
  adAccountId: string;
}

export class MetaAuthUrlResponseDto {
  @ApiProperty({
    description: 'Meta OAuth authorization URL',
    example: 'https://www.facebook.com/v19.0/dialog/oauth?client_id=...',
  })
  authUrl: string;
}

export class MetaConnectionResponseDto {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({
    type: 'object',
    properties: {
      id: { type: 'string', example: 'uuid-string' },
      email: { type: 'string', example: 'user@example.com' },
      name: { type: 'string', example: 'John Doe' },
      metaUserId: { type: 'string', example: '123456789' },
      metaAdAccountId: { type: 'string', example: 'act_123456789' },
    },
  })
  user: object;

  @ApiProperty({
    type: 'object',
    properties: {
      id: { type: 'string', example: '123456789' },
      name: { type: 'string', example: 'John Doe' },
      email: { type: 'string', example: 'user@example.com' },
    },
  })
  metaUser: object;
}

export class MetaConnectionStatusDto {
  @ApiProperty({ example: true })
  connected: boolean;

  @ApiProperty({ example: 'Meta account connected successfully', required: false })
  message?: string;

  @ApiProperty({ })
  user?: object;

  @ApiProperty({ example: 'act_123456789', required: false })
  adAccountId?: string;

  @ApiProperty({})
  @IsObject()
  error?: object;
}