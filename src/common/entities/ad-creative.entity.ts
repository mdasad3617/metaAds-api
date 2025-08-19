import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { CreativeType } from '../enum/metaEnum';
import { UserEntity } from './user.entity';
import { AdEntity } from './ad.entity';

@Entity('ad_creatives')
export class AdCreativeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: CreativeType,
    default: CreativeType.IMAGE
  })
  type: CreativeType;

  @Column('text', { nullable: true })
  imageUrl?: string;

  @Column('text', { nullable: true })
  videoUrl?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('text', { nullable: true })
  prompt?: string;

  @Column({ nullable: true })
  aiModel?: string;

  @Column({ nullable: true })
  style?: string;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, user => user.adCreatives, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @OneToMany(() => AdEntity, ad => ad.adCreative)
  ads: AdEntity[];
}