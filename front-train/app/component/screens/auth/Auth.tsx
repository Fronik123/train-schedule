import { useNavigation } from "@react-navigation/native";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFormData } from "@/types/auth.interface";
import { useAuthMutations } from "./useAuthMutation";
import { Pressable, Text, View } from "react-native";
import Button from "@/component/ui/button/Button";
import Loader from "@/component/ui/Loader";
import AuthFields from "./AuthFields";
import { FC, useState } from "react";

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });

  const { isLoding, registerSync, loginSync } = useAuthMutations(reset);

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    const SERVER_URL = process.env.SERVER_URL;

    if (isReg) {
      registerSync(data);
    } else {
      loginSync(data);
    }
  };

  const isLoading = false;

  return (
    <View className="flex items-center  justify-center h-screen">
      <View className="w-9/12 ">
        <Text className="py-7 text-center text-black text-3xl">
          {isReg ? "Sign Up" : "Login"}
        </Text>

        <AuthFields control={control} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Button onPress={handleSubmit(onSubmit)}>
              {isReg ? "Sign Up" : "Login"}
            </Button>

            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text className="text-black text-center text-base mt-6">
                {isReg
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <Text className=" text-mainGreen">
                  {isReg ? "Login" : "Sign up"}
                </Text>
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Auth;
