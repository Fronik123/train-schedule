import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnScheduleObject } from './return-schedule.object';
import { ScheduleDto } from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async getAll(search?: string) {
    if (search) return this.search(search);

    return this.prisma.schedule.findMany({
      select: returnScheduleObject,
    });
  }

  async search(search?: string) {
    return this.prisma.schedule.findMany({
      where: {
        OR: [
          {
            trainNumber: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            arrival: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            departure: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
      select: returnScheduleObject,
    });
  }

  async byId(id: string) {
    const schedule = await this.prisma.schedule.findUnique({
      where: {
        id,
      },
      select: returnScheduleObject,
    });

    if (!schedule) throw new Error('Schedule not found');

    return schedule;
  }

  async create(dto: ScheduleDto) {
    return this.prisma.schedule.create({
      data: {
        trainNumber: dto.trainNumber || '',
        departure: dto.departure || '',
        arrival: dto.arrival || '',
        trainType: dto.trainType || 'fast',
        departureAt: new Date(),
        arrivalAt: new Date(),
        price: dto.price || 0,
      },
    });
  }

  async update(id: string, dto: ScheduleDto) {
    return this.prisma.schedule.update({
      where: {
        id,
      },
      data: {
        trainNumber: dto.trainNumber,
        arrival: dto.arrival,
        departure: dto.departure,
        price: dto.price,
        trainType: dto.trainType,
      },
    });
  }

  async delete(id: string) {
    await this.prisma.savedSchedule.deleteMany({
      where: { scheduleId: id },
    });

    return this.prisma.schedule.delete({
      where: { id },
    });
  }
}
