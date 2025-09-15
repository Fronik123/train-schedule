import { TypeRootStackParamList } from "@/navigation/navigation.types";
import { TypeFeatherIconNames } from "@/types/icon.interface";
import { Role } from "@/types/user.interface";

export interface IMenuItem {
  icon: TypeFeatherIconNames;
  path: keyof TypeRootStackParamList;
  roles?: (Role.ADMIN | Role.USER)[];
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void;
