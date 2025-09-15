import { useDeleteSchedule } from "../../schedule/schedules/useSchedules";
import SchedulesItem from "../../schedule/schedules/SchedulesItem";
import { ISearchFromData } from "./search.interface";
import Field from "@/component/ui/field/Field";
import Layout from "@/component/layout/Layout";
import Loader from "@/component/ui/Loader";
import { useAuth } from "@/hooks/useAuth";
import { Text, View } from "react-native";
import { useSearch } from "./useSearch";
import { FC } from "react";

const Search: FC = () => {
  const { searchTerm, isLoading, control, schedules } = useSearch();
  const { mutate: deleteSchedule, isPending } = useDeleteSchedule();
  const { user } = useAuth();

  const handleDelete = (id: string) => {
    deleteSchedule(id);
  };

  return (
    <View>
      <Text className="text-center font-medium text-3xl">Search</Text>

      <Text>(train number, arrival, departure)</Text>

      <View>
        <Field<ISearchFromData>
          placeholder="Search"
          control={control}
          name="searchTerm"
          keyboardType="web-search"
        />
      </View>

      {!!searchTerm ? (
        <View>
          {isLoading ? (
            <Loader />
          ) : (
            <View>
              {schedules?.map((item) => (
                <SchedulesItem
                  user={user}
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                />
              ))}
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default Search;
