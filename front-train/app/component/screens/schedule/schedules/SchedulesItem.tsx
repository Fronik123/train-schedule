import FavoriteButton from "@/component/ui/favorite-button/FavoriteButton";
import { useDeleteSchedule, useGetBySchedule } from "./useSchedules";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import { ISchedule } from "@/types/schedule.service";
import { IUser, Role } from "@/types/user.interface";
import { Pressable, Text, View } from "react-native";
import Button from "@/component/ui/button/Button";
import Layout from "@/component/layout/Layout";
import { FC } from "react";

interface SchedulesItemProps {
  item: ISchedule;
  user: IUser | null;
  handleDelete: (id: string) => void;
}

const SchedulesItem: FC<SchedulesItemProps> = ({
  user,
  item,
  handleDelete,
}) => {
  const { navigate } = useTypedNavigation();

  return (
    <View className="rounded-xl bg-gray-100 my-3 p-3">
      <Pressable onPress={() => navigate("Schedule", { id: item.id })}>
        <View className="flex-row gap-2">
          <Text> Train №:</Text>
          <Text>{item.trainNumber}</Text>
        </View>

        <View className="flex-row justify-between py-2">
          <View className="flex-row gap-2">
            <Text>Arrival:</Text>
            <Text>{item.arrival}</Text>
          </View>

          <View className="flex-row gap-2">
            <Text> Departure:</Text>
            <Text>{item.departure}</Text>
          </View>
        </View>

        <View className="flex-row justify-between py-2">
          <View className="flex-col mt-2">
            <Text>Train Type:</Text>
            <Text className="font-medium">{item.trainType}</Text>
          </View>

          <View className="flex-col mt-2">
            <Text>Price:</Text>
            <Text className="text-2xl font-medium">{item.price} $</Text>
          </View>
        </View>

        <View className="flex-row justify-between">
          <View>
            <Text>Create Time:</Text>
            <Text>{new Date(item.createdAt).toDateString()}</Text>
          </View>

          <FavoriteButton scheduleId={item.id} />
        </View>

        {user?.role == Role.ADMIN && (
          <Button isRed onPress={() => handleDelete(item.id)}>
            Delete
          </Button>
        )}
      </Pressable>
    </View>
  );
};

export default SchedulesItem;
