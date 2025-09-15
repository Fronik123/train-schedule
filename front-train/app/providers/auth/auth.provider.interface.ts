import { Dispatch, SetStateAction } from "react";
import { IUser } from "@/types/user.interface";

export type TypeUserState = IUser | null;

export interface IContext {
  user: TypeUserState;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<TypeUserState>>;
}
