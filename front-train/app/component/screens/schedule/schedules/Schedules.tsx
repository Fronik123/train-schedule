import { useDeleteSchedule, useGetAllSchedule } from "./useSchedules";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import Search from "../../home/search/Search";
import SchedulesItem from "./SchedulesItem";
import Loader from "@/component/ui/Loader";
import { useAuth } from "@/hooks/useAuth";
import { Text, View } from "react-native";
import { FC, useState } from "react";

import FilterScheduleByType from "./FilterScheduleByType";
import SortByData from "./SortByData";

const Schedules: FC = () => {
  const { schedules, isLoading: schedulesLoading } = useGetAllSchedule();
  const { user, isLoading: userLoading } = useAuth();

  const { mutate: deleteSchedule } = useDeleteSchedule();

  const handleDelete = (id: string) => {
    deleteSchedule(id);
  };

  const [selected, setSelected] = useState<string | null>("All");
  const [sortByDate, setSortByDate] = useState(false);

  const clearFilter = () => setSelected("All");
  const options = ["All", "Classic", "Fast"];

  const filteredByType =
    selected === "All"
      ? schedules
      : schedules?.filter((item) => item.trainType === selected);

  const finalList = sortByDate
    ? [...(filteredByType || [])].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    : filteredByType;

  if (schedulesLoading) {
    <Loader />;
  }

  return (
    <View>
      <Search />

      <View className="flex-row justify-between">
        <FilterScheduleByType
          options={options}
          onClear={clearFilter}
          onSelect={setSelected}
          selected={selected}
        />

        <SortByData selected={sortByDate} onSelect={setSortByDate} />
      </View>

      <Text className="text-center font-medium text-3xl">Schedules</Text>

      <View className="pb-1">
        {schedules?.length ? (
          <View className="flex-col justify-center mb-20">
            {finalList?.length ? (
              <>
                {finalList?.map((item) => (
                  <SchedulesItem
                    user={user}
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                  />
                ))}
              </>
            ) : (
              <Text className="font-medium text-2xl text-center">NoResult</Text>
            )}
          </View>
        ) : (
          <Text className="mt-20 text-center font-medium text-3xl">
            Empty Schedules
          </Text>
        )}
      </View>
    </View>
  );
};

export default Schedules;
