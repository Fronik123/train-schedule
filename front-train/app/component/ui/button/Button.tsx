import { Pressable, Text, View } from "react-native";
import { FC, PropsWithChildren } from "react";
import { IButton } from "./button.interface";
import cn from "clsx";

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  isRed,
  className,
  ...rest
}) => {
  return (
    <Pressable
      className={cn(
        `self-center mt-3.5 ${isRed ? "bg-mainRed" : "bg-mainGreen"} w-full py-3 font-light rounded-lg`,
        className,
      )}
      {...rest}
    >
      <Text className="text-white text-center font-medium text-lg">
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
