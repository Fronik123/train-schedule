import { ComponentType } from "react";

export type TypeRootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
  Schedule: {
    id: string;
  };
  CreateSchedule: undefined;
  Favorites: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}
