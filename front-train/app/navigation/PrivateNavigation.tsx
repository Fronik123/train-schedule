import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import Auth from "@/component/screens/auth/Auth";
import { useAuth } from "@/hooks/useAuth";
import { routes } from "./routes";
import React, { FC } from "react";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigation: FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Stack.Navigator
        initialRouteName={user ? "Home" : "Auth"}
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        {user ? (
          routes.map((route) => <Stack.Screen key={route.name} {...route} />)
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default PrivateNavigation;
