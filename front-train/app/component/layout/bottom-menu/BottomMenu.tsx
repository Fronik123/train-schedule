import { Pressable, Text, View, ViewComponent } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IMenuItem, TypeNavigate } from "./menu.interface";
import { Role } from "@/types/user.interface";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "@/hooks/useAuth";
import { menuItems } from "./menu.data";
import MenuItem from "./MenuItem";
import { FC } from "react";

interface IBottomMenu {
  nav: TypeNavigate;
  currentRoute?: string;
}

const BottomMenu: FC<IBottomMenu> = (props) => {
  const { bottom } = useSafeAreaInsets();

  const { user } = useAuth();

  const filteredMenu = menuItems.filter(
    (item) =>
      !item.roles || item.roles.includes((user?.role as Role) || "user"),
  );

  return (
    <View
      className="pt-5 px-2 flex-row justify-between items-center border-t border-t-solid border-t-[#bbbbbb]"
      style={{ paddingBottom: bottom + 20 }}
    >
      {filteredMenu.map((item) => (
        <MenuItem key={item.path} item={item} {...props} />
      ))}
    </View>
  );
};

export default BottomMenu;
