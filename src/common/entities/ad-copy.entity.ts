import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { CampaignEntity } from './campaign.entity';
import { AdEntity } from './ad.entity';

@Entity('ad_copies')
export class AdCopyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  headline: string;

  @Column('text')
  primaryText: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  callToAction?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('text', { nullable: true })
  prompt?: string;

  @Column({ nullable: true })
  aiModel?: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  temperature?: number;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, user => user.adCopies, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column({ nullable: true })
  campaignId?: string;

  @ManyToOne(() => CampaignEntity, campaign => campaign.adCopies, { nullable: true })
  @JoinColumn({ name: 'campaignId' })
  campaign?: CampaignEntity;

  @OneToMany(() => AdEntity, ad => ad.adCopy)
  ads: AdEntity[];
}