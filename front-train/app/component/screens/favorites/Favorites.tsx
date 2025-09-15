import { useGetAllSchedule } from "../schedule/schedules/useSchedules";
import SchedulesItem from "../schedule/schedules/SchedulesItem";
import Schedules from "../schedule/schedules/Schedules";
import { useProfile } from "../profile/useProfile";
import Layout from "@/component/layout/Layout";
import Loader from "@/component/ui/Loader";
import { useAuth } from "@/hooks/useAuth";
import { Text, View } from "react-native";
import { FC } from "react";

const Favorites: FC = () => {
  const { schedules, isLoading: schedulesLoading } = useGetAllSchedule();

  const { user, isLoading: userLoading } = useAuth();
  const { profile } = useProfile();

  if (!profile || !schedules) return <Text>Error loading data</Text>;

  const favoriteSchedules = schedules.filter((schedule) =>
    profile.savedSchedules.some((s) => s.scheduleId === schedule.id),
  );

  const handleDelete = () => {};
  return (
    <Layout>
      <View>
        <Text className="text-center font-medium text-4xl">Favorites</Text>

        {favoriteSchedules.length ? (
          <>
            {favoriteSchedules?.map((item) => (
              <SchedulesItem
                key={item.id}
                item={item}
                user={user}
                handleDelete={handleDelete}
              />
            ))}
          </>
        ) : (
          <Text className="text-center font-medium mt-20 text-xl">
            No Favorites
          </Text>
        )}
      </View>
    </Layout>
  );
};

export default Favorites;
