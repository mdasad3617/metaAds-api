import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdCopyRequest, AdImageRequest } from 'src/common/interface/metaInterface';
import { AiService } from './ai.service';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate-copy')
  async generateAdCopy(@Request() req, @Body() body: AdCopyRequest) {
    return this.aiService.generateAdCopy(req.user.userId, body);
  }

  @Post('generate-image')
  async generateAdImage(@Request() req, @Body() body: AdImageRequest) {
    return this.aiService.generateAdImage(req.user.userId, body);
  }

  @Get('copy-history')
  async getAdCopyHistory(@Request() req) {
    return this.aiService.getAdCopyHistory(req.user.userId);
  }

  @Get('creative-history')
  async getAdCreativeHistory(@Request() req) {
    return this.aiService.getAdCreativeHistory(req.user.userId);
  }
}