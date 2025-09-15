import { getAccessToken } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import { getNewTokens } from "@/services/api/helper.auth";
import { EnumSecureStore } from "@/types/auth.interface";
import { errorCatch } from "@/services/api/error.api";
import { getItemAsync } from "expo-secure-store";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export const useCheckAuth = (routeName?: string) => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    const checkAccessToken = async () => {
      const accessToken = await getAccessToken();

      if (accessToken) {
        try {
          await getNewTokens();
        } catch (e) {
          if (errorCatch(e) === "jwt expired") {
            await AuthService.logout();
            setUser(null);
          }
        }
      }
    };

    let ignor = checkAccessToken();
  }, []);

  useEffect(() => {
    const checkRefreshToken = async () => {
      const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN);

      if (!refreshToken && user) {
        await AuthService.logout();
        setUser(null);
      }
    };

    let ignor = checkRefreshToken();
  }, [routeName]);
};
