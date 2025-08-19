import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { MetaService } from '../meta/meta.service';
import { CreateCampaignRequest, CreateAdSetRequest, CreateAdRequest } from 'src/common/interface/metaInterface';
import { CampaignEntity } from 'src/common/entities/campaign.entity';
import { AdSetEntity } from 'src/common/entities/ad-set.entity';
import { AdEntity } from 'src/common/entities/ad.entity';
import { AdCopyEntity } from 'src/common/entities/ad-copy.entity';
import { AdCreativeEntity } from 'src/common/entities/ad-creative.entity';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(CampaignEntity)
    private campaignRepository: Repository<CampaignEntity>,
    @InjectRepository(AdSetEntity)
    private adSetRepository: Repository<AdSetEntity>,
    @InjectRepository(AdEntity)
    private adRepository: Repository<AdEntity>,
    @InjectRepository(AdCopyEntity)
    private adCopyRepository: Repository<AdCopyEntity>,
    @InjectRepository(AdCreativeEntity)
    private adCreativeRepository: Repository<AdCreativeEntity>,
    private usersService: UsersService,
    private metaService: MetaService,
  ) {}

  async createCampaign(userId: string, request: CreateCampaignRequest) {
    const { name, objective, budget, startDate, endDate } = request;

    const campaign = this.campaignRepository.create({
      name,
      objective: objective as any,
      budget,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      userId,
    });

    return this.campaignRepository.save(campaign);
  }

  async createAdSet(userId: string, request: CreateAdSetRequest) {
    const { campaignId, name, targetingOptions, budget, bidStrategy } = request;

    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId, userId },
    });

    if (!campaign) {
      throw new BadRequestException('Campaign not found');
    }

    const adSet = this.adSetRepository.create({
      name,
      targetingOptions,
      budget,
      bidStrategy,
      campaignId,
    });

    return this.adSetRepository.save(adSet);
  }

  async createAd(userId: string, request: CreateAdRequest) {
    const { adSetId, name, adCopyId, adCreativeId } = request;

    const adSet = await this.adSetRepository.findOne({
      where: { id: adSetId },
      relations: ['campaign'],
    });

    if (!adSet || adSet.campaign.userId !== userId) {
      throw new BadRequestException('Ad set not found');
    }

    const ad = this.adRepository.create({
      name,
      adSetId,
      adCopyId,
      adCreativeId,
    });

    return this.adRepository.save(ad);
  }

  async getCampaigns(userId: string) {
    return this.campaignRepository.find({
      where: { userId },
      relations: ['adSets', 'adSets.ads', 'adSets.ads.adCopy', 'adSets.ads.adCreative'],
      order: { createdAt: 'DESC' },
    });
  }

  async getCampaignById(userId: string, campaignId: string) {
    return this.campaignRepository.findOne({
      where: { id: campaignId, userId },
      relations: ['adSets', 'adSets.ads', 'adSets.ads.adCopy', 'adSets.ads.adCreative'],
    });
  }

  async publishCampaignToMeta(userId: string, campaignId: string) {
    const user = await this.usersService.findById(userId);
    if (!user?.metaAccessToken || !user?.metaAdAccountId) {
      throw new BadRequestException('Meta integration not configured. Please connect your Facebook account and select an ad account.');
    }

    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId, userId },
      relations: ['adSets', 'adSets.ads', 'adSets.ads.adCopy', 'adSets.ads.adCreative'],
    });

    if (!campaign) {
      throw new BadRequestException('Campaign not found');
    }

    if (campaign.metaCampaignId) {
      throw new BadRequestException('Campaign is already published to Meta');
    }

    try {
      const metaCampaignResponse = await this.metaService.createCampaign(
        userId,
        user.metaAdAccountId,
        {
          name: campaign.name,
          objective: campaign.objective,
          status: 'PAUSED',
        }
      );

      await this.campaignRepository.update(campaignId, { 
        metaCampaignId: metaCampaignResponse.id 
      });

      return {
        ...campaign,
        metaCampaignId: metaCampaignResponse.id,
        message: 'Campaign published to Meta successfully',
      };
    } catch (error) {
      console.error('Error publishing campaign to Meta:', error);
      throw new BadRequestException(`Failed to publish campaign to Meta: ${error.message}`);
    }
  }

  async getMetaAdAccounts(userId: string) {
    return this.metaService.getAdAccounts(userId);
  }
}