import { Role } from "@/types/user.interface";
import { IMenuItem } from "./menu.interface";

export const menuItems: IMenuItem[] = [
  {
    icon: "home",
    path: "Home",
  },
  {
    icon: "plus",
    path: "CreateSchedule",
    roles: [Role.ADMIN],
  },
  {
    icon: "heart",
    path: "Favorites",
  },
  {
    icon: "user",
    path: "Profile",
  },
];
