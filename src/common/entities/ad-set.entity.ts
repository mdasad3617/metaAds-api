import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { AdSetStatus } from '../enum/metaEnum';
import { CampaignEntity } from './campaign.entity';
import { AdEntity } from './ad.entity';

@Entity('ad_sets')
export class AdSetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'jsonb', nullable: true })
  targetingOptions?: any;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  budget?: number;

  @Column({ nullable: true })
  bidStrategy?: string;

  @Column({
    type: 'enum',
    enum: AdSetStatus,
    default: AdSetStatus.DRAFT
  })
  status: AdSetStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Meta ad set ID when published
  @Column({ nullable: true })
  metaAdSetId?: string;

  // Relations
  @Column()
  campaignId: string;

  @ManyToOne(() => CampaignEntity, campaign => campaign.adSets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'campaignId' })
  campaign: CampaignEntity;

  @OneToMany(() => AdEntity, ad => ad.adSet)
  ads: AdEntity[];
}