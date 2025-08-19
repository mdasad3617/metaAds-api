import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../common/entities/user.entity';
import { CreateUserData } from 'src/common/interface/metaInterface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async create(data: CreateUserData) {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async findById(id: string) {
    return this.userRepository.findOne({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        metaAccessToken: true,
        metaUserId: true,
        metaAdAccountId: true,
      },
    });
  }

  async updateRefreshToken(userId: string, refreshToken: string | null) {
    await this.userRepository.update(userId, { refreshToken });
  }

  async updateMetaIntegration(
    userId: string,
    data: {
      metaAccessToken?: string;
      metaRefreshToken?: string;
      metaTokenExpiresAt?: Date;
      metaUserId?: string;
      metaAdAccountId?: string;
    },
  ) {
    await this.userRepository.update(userId, data);
    return this.userRepository.findOne({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        metaUserId: true,
        metaAdAccountId: true,
      },
    });
  }

  async validateUser(id: string) {
    const user = await this.userRepository.findOne({where:{id}})
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user;
  }
}