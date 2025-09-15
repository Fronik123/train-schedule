import { ICreateSchedule, ISchedule } from "@/types/schedule.service";
import { getScheduleUrl } from "@/config/api.config";
import { request } from "./api/request.api";

export const ScheduleService = {
  async getAll(search?: string) {
    return request<ISchedule[]>({
      url: getScheduleUrl(""),
      method: "GET",
      params: search ? { search } : {},
    });
  },

  async getByid(id: string) {
    return request<ISchedule>({
      url: getScheduleUrl(`/${id}`),
      method: "GET",
    });
  },

  async delete(id: string) {
    return request<ISchedule>({
      url: getScheduleUrl(`/${id}`),
      method: "DELETE",
    });
  },

  async create(data: ICreateSchedule) {
    return request<ISchedule>({
      url: getScheduleUrl("/create"),
      method: "POST",
      data,
    });
  },
};
