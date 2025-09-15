import { ISavedSchedule } from "./schedule.service";

export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  role: Role;
  savedSchedules: ISavedSchedule[];
}

export enum Role {
  USER = "user",
  ADMIN = "admin",
}
