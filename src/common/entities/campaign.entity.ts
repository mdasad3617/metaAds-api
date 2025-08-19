import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { CampaignObjective, CampaignStatus } from '../enum/metaEnum';
import { AdCopyEntity } from './ad-copy.entity';
import { AdSetEntity } from './ad-set.entity';
import { UserEntity } from './user.entity';

@Entity('campaigns')
export class CampaignEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: CampaignObjective,
    default: CampaignObjective.TRAFFIC
  })
  objective: CampaignObjective;

  @Column({
    type: 'enum',
    enum: CampaignStatus,
    default: CampaignStatus.DRAFT
  })
  status: CampaignStatus;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  budget?: number;

  @Column({ type: 'timestamp', nullable: true })
  startDate?: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDate?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  metaCampaignId?: string;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, user => user.campaigns, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @OneToMany(() => AdSetEntity, adSet => adSet.campaign)
  adSets: AdSetEntity[];

  @OneToMany(() => AdCopyEntity, adCopy => adCopy.campaign)
  adCopies: AdCopyEntity[];
}