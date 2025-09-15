import Home from "@/component/screens/home/Home";
import Auth from "@/component/screens/auth/Auth";

import CreateSchedule from "@/component/screens/CreateSchedule/CreateSchedule";
import Favorites from "@/component/screens/favorites/Favorites";
import Schedule from "@/component/screens/schedule/Schedule";
import Profile from "@/component/screens/profile/Profile";
import { IRoute } from "./navigation.types";

export const routes: IRoute[] = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "Schedule",
    component: Schedule,
  },
  {
    name: "CreateSchedule",
    component: CreateSchedule,
  },
  {
    name: "Favorites",
    component: Favorites,
  },
];
