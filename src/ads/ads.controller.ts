import { Controller, Post, Get, Body, Param, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdsService } from './ads.service';
import { 
  CreateCampaignDto, 
  CreateAdSetDto, 
  CreateAdDto, 
  CampaignResponseDto, 
  AdSetResponseDto, 
  AdResponseDto, 
  PublishCampaignResponseDto 
} from './dto';

@ApiTags('Ads')
@Controller('ads')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post('campaigns')
  @ApiOperation({ summary: 'Create a new campaign in local database' })
  @ApiBody({ type: CreateCampaignDto })
  @ApiResponse({
    status: 201,
    description: 'Campaign created successfully',
    type: CampaignResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid campaign data',
  })
  async createCampaign(@Request() req, @Body() body: CreateCampaignDto){
    return this.adsService.createCampaign(req.user.userId, body);
  }

  @Post('campaigns/:id/publish')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Publish campaign to Meta Ads' })
  @ApiParam({ name: 'id', description: 'Campaign ID' })
  @ApiResponse({
    status: 200,
    description: 'Campaign published to Meta successfully',
    type: PublishCampaignResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Campaign not found or Meta API error',
  })
  async publishCampaign(@Request() req, @Param('id') campaignId: string){
    return this.adsService.publishCampaignToMeta(req.user.userId, campaignId);
  }

  @Post('adsets')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new ad set in local database' })
  @ApiBody({ type: CreateAdSetDto })
  @ApiResponse({
    status: 201,
    description: 'Ad set created successfully',
    type: AdSetResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ad set data',
  })
  async createAdSet(@Request() req, @Body() body: CreateAdSetDto) {
    return this.adsService.createAdSet(req.user.userId, body);
  }

  @Post('ads')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new ad in local database' })
  @ApiBody({ type: CreateAdDto })
  @ApiResponse({
    status: 201,
    description: 'Ad created successfully',
    type: AdResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ad data',
  })
  async createAd(@Request() req, @Body() body: CreateAdDto){
    return this.adsService.createAd(req.user.userId, body);
  }

  @Get('campaigns')
  @ApiOperation({ summary: 'Get user\'s campaigns' })
  @ApiResponse({
    status: 200,
    description: 'Campaigns retrieved successfully',
    type: [CampaignResponseDto],
  })
  async getCampaigns(@Request() req){
    return this.adsService.getCampaigns(req.user.userId);
  }

  @Get('campaigns/:id')
  @ApiOperation({ summary: 'Get campaign by ID' })
  @ApiParam({ name: 'id', description: 'Campaign ID' })
  @ApiResponse({
    status: 200,
    description: 'Campaign retrieved successfully',
    type: CampaignResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Campaign not found',
  })
  async getCampaignById(@Request() req, @Param('id') campaignId: string) {
    return this.adsService.getCampaignById(req.user.userId, campaignId);
  }

  @Get('meta/adaccounts')
  @ApiOperation({ summary: 'Get Meta ad accounts (deprecated - use /meta/ad-accounts instead)' })
  @ApiResponse({
    status: 200,
    description: 'Meta ad accounts retrieved successfully',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          account_status: { type: 'number' },
          currency: { type: 'string' },
        },
      },
    },
  })
  async getMetaAdAccounts(@Request() req) {
    return this.adsService.getMetaAdAccounts(req.user.userId);
  }
}