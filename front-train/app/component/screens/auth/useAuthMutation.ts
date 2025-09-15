import { AuthService } from "@/services/auth/auth.service";
import { IAuthFormData } from "@/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useMemo } from "react";

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
  const { setUser } = useAuth();

  const { mutate: loginSync, isPending: isLoginLoding } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: IAuthFormData) =>
      AuthService.main("log", email, password),
    onSuccess(data) {
      reset();
      setUser(data.user);
    },
  });

  const { mutate: registerSync, isPending: isRegisterLoding } = useMutation({
    mutationKey: ["register"],
    mutationFn: ({ email, password }: IAuthFormData) =>
      AuthService.main("reg", email, password),
    onSuccess(data) {
      reset();
      setUser(data.user);
    },
  });

  return useMemo(
    () => ({
      loginSync,
      registerSync,
      isLoding: isLoginLoding || isRegisterLoding,
    }),
    [isLoginLoding, isRegisterLoding],
  );
};
