import { Controller, Post, Get, Body, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AiService } from './ai.service';
import { 
  GenerateAdCopyDto, 
  GenerateAdImageDto, 
  AdCopyResponseDto, 
  AdImageResponseDto, 
  AdCopyHistoryDto, 
  AdImageHistoryDto 
} from './dto';

@ApiTags('AI')
@Controller('ai')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate-copy')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Generate AI-powered ad copy' })
  @ApiBody({ type: GenerateAdCopyDto })
  @ApiResponse({
    status: 201,
    description: 'Ad copy generated successfully',
    type: AdCopyResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data',
  })
  async generateAdCopy(@Request() req, @Body() body: GenerateAdCopyDto) {
    return this.aiService.generateAdCopy(req.user.userId, body);
  }

  @Post('generate-image')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Generate AI-powered ad images' })
  @ApiBody({ type: GenerateAdImageDto })
  @ApiResponse({
    status: 201,
    description: 'Ad image generated successfully',
    type: AdImageResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data',
  })
  async generateAdImage(@Request() req, @Body() body: GenerateAdImageDto) {
    return this.aiService.generateAdImage(req.user.userId, body);
  }

  @Get('copy-history')
  @ApiOperation({ summary: 'Get user\'s ad copy generation history' })
  @ApiResponse({
    status: 200,
    description: 'Ad copy history retrieved successfully',
    type: AdCopyHistoryDto,
  })
  async getAdCopyHistory(@Request() req) {
    return this.aiService.getAdCopyHistory(req.user.userId);
  }

  @Get('creative-history')
  @ApiOperation({ summary: 'Get user\'s ad creative generation history' })
  @ApiResponse({
    status: 200,
    description: 'Ad creative history retrieved successfully',
    type: AdImageHistoryDto,
  })
  async getAdCreativeHistory(@Request() req) {
    return this.aiService.getAdCreativeHistory(req.user.userId);
  }
}