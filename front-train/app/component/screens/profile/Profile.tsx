import { AuthService } from "@/services/auth/auth.service";
import { Text, View, StyleSheet } from "react-native";
import Layout from "@/component/layout/Layout";

import React, { FC, useState, useRef } from "react";
import Button from "@/component/ui/button/Button";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "./useProfile";

const Profile: FC = () => {
  const { setUser } = useAuth();

  const { profile } = useProfile();

  const logout = () => {
    return AuthService.logout().then(() => setUser(null));
  };

  return (
    <View className="flex-1 items-center justify-center p-5">
      <View className="">
        <Text>IMAGE PROFILE</Text>

        <View className="flex-row gap-2">
          <Text>name:</Text>
          <Text>{profile?.name}</Text>
        </View>

        <View className="flex-row gap-2">
          <Text>Role:</Text>
          <Text>{profile?.role}</Text>
        </View>
      </View>

      <Button className="mt-5" onPress={logout}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  dropdown: {
    borderColor: "#ccc",
  },
});

export default Profile;
