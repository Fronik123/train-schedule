import { useCreateSchedule } from "../schedule/schedules/useSchedules";
import { ICreateSchedule } from "@/types/schedule.service";
import CreateScheduleFields from "./CreateScheduleFields";
import { SubmitHandler, useForm } from "react-hook-form";
import Schedules from "../schedule/schedules/Schedules";
import { IAuthFormData } from "@/types/auth.interface";
import { Pressable, Text, View } from "react-native";
import Button from "@/component/ui/button/Button";
import Field from "@/component/ui/field/Field";
import Layout from "@/component/layout/Layout";
import { FC } from "react";

const CreateSchedule: FC = () => {
  const { handleSubmit, reset, control } = useForm<ICreateSchedule>({
    mode: "onChange",
  });
  const { mutate: createSchedule, isPending } = useCreateSchedule(reset);

  const onSubmit: SubmitHandler<ICreateSchedule> = (data) => {
    createSchedule({
      trainNumber: data.trainNumber,
      arrival: data.arrival,
      departure: data.departure,
      trainType: data.trainType,
      price: Number(data.price),
    });
  };

  return (
    <Layout>
      <Text className="text-center font-medium text-3xl">Create</Text>

      <CreateScheduleFields control={control} />

      <Button className="mt-5" onPress={handleSubmit(onSubmit)}>
        Create Schedule
      </Button>
    </Layout>
  );
};

export default CreateSchedule;
