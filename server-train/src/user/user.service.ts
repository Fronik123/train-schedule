import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { returnUserObject } from './return-user.object';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string, selectObject: Prisma.UserSelect = {}) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        ...returnUserObject,
        savedSchedules: {
          select: {
            id: true,
            scheduleId: true,
          },
        },
        ...selectObject,
      },
    });

    if (!user) throw new Error('User not found');

    return user;
  }

  async toggleFavorite(userId: string, scheduleId: string) {
    const existing = await this.prisma.savedSchedule.findFirst({
      where: { userId, scheduleId },
    });

    if (existing) {
      await this.prisma.savedSchedule.delete({
        where: { id: existing.id },
      });
    } else {
      await this.prisma.savedSchedule.create({
        data: { userId, scheduleId },
      });
    }

    return { message: 'Success' };
  }
}
