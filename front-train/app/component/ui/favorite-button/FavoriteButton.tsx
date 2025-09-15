import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { useProfile } from "@/component/screens/profile/useProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Icon from "react-native-vector-icons/MaterialIcons";
import { UserService } from "@/services/user.service";
import { FC } from "react";

interface IFavoriteButton {
  scheduleId: string;
}

const FavoriteButton: FC<IFavoriteButton> = ({ scheduleId }) => {
  const { profile } = useProfile();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["toggle favorite"],
    mutationFn: () => UserService.toggleFavorite(scheduleId),

    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["get profile"] });
    },
  });

  if (!profile) return null;

  const isExists = profile.savedSchedules.some(
    (save) => save.scheduleId == scheduleId,
  );

  return (
    <Pressable onPress={() => mutate()}>
      {isExists ? (
        <Icon name="favorite" size={24} color="red" />
      ) : (
        <Icon name="favorite-border" size={24} color="gray" />
      )}
    </Pressable>
  );
};

export default FavoriteButton;
