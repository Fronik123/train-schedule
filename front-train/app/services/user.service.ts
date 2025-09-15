import { getUserUrl } from "@/config/api.config";
import { IUser } from "@/types/user.interface";
import { request } from "./api/request.api";

export const UserService = {
  async getProfile() {
    return request<IUser>({
      url: getUserUrl("/profile"),
      method: "GET",
    });
  },

  async toggleFavorite(scheduleId: string) {
    return request<IUser>({
      url: getUserUrl(`/profile/schedule/${scheduleId}`),
      method: "PATCH",
    });
  },
};
