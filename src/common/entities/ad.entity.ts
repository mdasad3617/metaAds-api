import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AdStatus } from '../enum/metaEnum';
import { AdSetEntity } from './ad-set.entity';
import { AdCopyEntity } from './ad-copy.entity';
import { AdCreativeEntity } from './ad-creative.entity';

@Entity('ads')
export class AdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: AdStatus,
    default: AdStatus.DRAFT
  })
  status: AdStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  metaAdId?: string;

  @Column()
  adSetId: string;

  @ManyToOne(() => AdSetEntity, adSet => adSet.ads, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'adSetId' })
  adSet: AdSetEntity;

  @Column({ nullable: true })
  adCopyId?: string;

  @ManyToOne(() => AdCopyEntity, { nullable: true })
  @JoinColumn({ name: 'adCopyId' })
  adCopy?: AdCopyEntity;

  @Column({ nullable: true })
  adCreativeId?: string;

  @ManyToOne(() => AdCreativeEntity, { nullable: true })
  @JoinColumn({ name: 'adCreativeId' })
  adCreative?: AdCreativeEntity;
}