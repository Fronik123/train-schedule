import { Prisma } from '@prisma/client';

export const returnScheduleObject: Prisma.ScheduleSelect = {
  id: true,
  trainNumber: true,
  departure: true,
  arrival: true,
  price: true,
  trainType: true,
  createdAt: true,
};
