import { useDeleteSchedule, useGetBySchedule } from "./schedules/useSchedules";
import { ScheduleLocalNotificationDetails, Text, View } from "react-native";
import { TypeRootStackParamList } from "@/navigation/navigation.types";
import { RouteProp, useRoute } from "@react-navigation/native";
import SchedulesItem from "./schedules/SchedulesItem";
import Layout from "@/component/layout/Layout";
import Loader from "@/component/ui/Loader";
import { useAuth } from "@/hooks/useAuth";
import { FC } from "react";

type ScheduleRouteProp = RouteProp<TypeRootStackParamList, "Schedule">;

const Schedule: FC = () => {
  const { params } = useRoute<ScheduleRouteProp>();
  const { id } = params;

  const { schedule, isLoading } = useGetBySchedule(id);
  const { mutate: deleteSchedule, isPending } = useDeleteSchedule();
  const { user } = useAuth();

  const handleDelete = (id: string) => {
    deleteSchedule(id);
  };

  if (isLoading) {
    <Loader />;
  }

  return (
    <Layout>
      <Text className="text-center font-medium text-3xl">
        Schedules Details
      </Text>

      {schedule ? (
        <SchedulesItem
          user={user}
          item={schedule}
          handleDelete={handleDelete}
        />
      ) : (
        <Text>No found</Text>
      )}
    </Layout>
  );
};

export default Schedule;
