import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    description: 'User unique identifier',
    example: 'uuid-string',
  })
  id: string;

  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'Account creation date',
    example: '2024-01-01T00:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Meta user ID',
    example: '123456789',
    required: false,
  })
  metaUserId?: string;

  @ApiProperty({
    description: 'Meta ad account ID',
    example: 'act_123456789',
    required: false,
  })
  metaAdAccountId?: string;
}

export class MetaIntegrationResponseDto {
  @ApiProperty({
    description: 'Operation success status',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Success message',
    example: 'Meta integration updated successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Updated user data',
    type: UserResponseDto,
  })
  user: UserResponseDto;
}