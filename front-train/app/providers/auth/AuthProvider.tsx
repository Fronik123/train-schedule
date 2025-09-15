// import * as SplashScreen from "expo-splash-screen";
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import {
  getAccessToken,
  getUserFromStorage,
} from "@/services/auth/auth.helper";
import { IContext, TypeUserState } from "./auth.provider.interface";
import { IUser } from "@/types/user.interface";
import * as Font from "expo-font";

export const AuthContext = createContext({} as IContext);

// let ignor = SplashScreen.preventAutoHideAsync();

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; //remove error

    const checkAccessToken = async () => {
      try {
        const accessToken = await getAccessToken();
        if (accessToken) {
          const user = await getUserFromStorage();
          if (isMounted) setUser(user);
        }
      } catch {
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    let ignor = checkAccessToken();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
