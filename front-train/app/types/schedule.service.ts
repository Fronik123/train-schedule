export interface ISchedule {
  id: string;
  trainNumber: string;
  arrival: string;
  departure: string;
  price: number;
  trainType: string;
  createdAt: string;
}

export interface ICreateSchedule {
  trainNumber: string;
  arrival: string;
  departure: string;
  trainType?: string;
  departureAt?: Date;
  arrivalAt?: Date;
  price: number;
}

export interface ISavedSchedule {
  id: string;
  scheduleId: string;
}
