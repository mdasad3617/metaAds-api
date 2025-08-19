import { Controller, Get, Put, Body, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateMetaIntegrationDto, UserResponseDto } from './dto';

@ApiTags('Users')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing token',
  })
  async getProfile(@Request() req): Promise<UserResponseDto> {
    return this.usersService.findById(req.user.userId);
  }

  @Put('meta-integration')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update Meta integration settings' })
  @ApiBody({ type: UpdateMetaIntegrationDto })
  @ApiResponse({
    status: 200,
    description: 'Meta integration updated successfully',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing token',
  })
  async updateMetaIntegration(
    @Request() req,
    @Body() updateDto: UpdateMetaIntegrationDto,
  ): Promise<UserResponseDto> {
    return this.usersService.updateMetaIntegration(req.user.userId, updateDto);
  }
}