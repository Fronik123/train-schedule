import { IsNumber, IsString } from 'class-validator';

export class ScheduleDto {
  @IsString()
  trainNumber: string;

  @IsString()
  arrival: string;

  @IsString()
  departure: string;

  @IsNumber()
  price: number;

  @IsString()
  trainType: string;
}
