import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomMenu from "@/component/layout/bottom-menu/BottomMenu";
import { useCheckAuth } from "@/providers/auth/useCheckAuth";
import { TypeRootStackParamList } from "./navigation.types";
import PrivateNavigation from "./PrivateNavigation";
import { FC, useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Text, View } from "react-native";
import { routes } from "./routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: FC = () => {
  const navRef = useNavigationContainerRef();
  const { user } = useAuth();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);

    const listener = navRef.addListener("state", () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name),
    );

    return () => {
      navRef.removeListener("state", listener);
    };
  }, []);

  useCheckAuth(currentRoute);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigation />
      </NavigationContainer>

      {user && currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  );
};

export default Navigation;
