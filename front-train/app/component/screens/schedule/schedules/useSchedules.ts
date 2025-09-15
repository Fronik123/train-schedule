import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICreateSchedule, ISchedule } from "@/types/schedule.service";
import { ScheduleService } from "@/services/schedule.service";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { UseFormReset } from "react-hook-form";

export const useGetAllSchedule = () => {
  const { data: schedules, isLoading } = useQuery({
    queryKey: ["get schedules"],
    queryFn: () => ScheduleService.getAll(),
    select: (data) => data,
  });

  return { schedules, isLoading };
};

export const useGetBySchedule = (id: string) => {
  const { data: schedule, isLoading } = useQuery({
    queryKey: ["get by id schedules"],
    queryFn: () => ScheduleService.getByid(id),
    select: (data) => data,
  });

  return { schedule, isLoading };
};

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ScheduleService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get schedules"] });
    },
  });
};

export const useCreateSchedule = (reset: UseFormReset<ICreateSchedule>) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ICreateSchedule) => ScheduleService.create(data),
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["get schedules"] });
    },
  });
};
