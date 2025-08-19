import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CampaignEntity } from './campaign.entity';
import { AdCopyEntity } from './ad-copy.entity';
import { AdCreativeEntity } from './ad-creative.entity';
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  name?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  metaAccessToken?: string;

  @Column({ nullable: true })
  metaUserId?: string;

  @Column({ nullable: true })
  metaAdAccountId?: string;

  @OneToMany(() => CampaignEntity, campaign => campaign.user)
  campaigns: CampaignEntity[];

  @OneToMany(() => AdCopyEntity, adCopy => adCopy.user)
  adCopies: AdCopyEntity[];

  @OneToMany(() => AdCreativeEntity, adCreative => adCreative.user)
  adCreatives: AdCreativeEntity[];
}