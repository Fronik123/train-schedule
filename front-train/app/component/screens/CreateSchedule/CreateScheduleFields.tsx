import { ICreateSchedule } from "@/types/schedule.service";
import { IAuthFormData } from "@/types/auth.interface";
import Field from "@/component/ui/field/Field";
import { Control } from "react-hook-form";
import { Text, View } from "react-native";
import { FC } from "react";

interface ICreateScheduleFields {
  control: Control<ICreateSchedule>;
}

const CreateScheduleFields: FC<ICreateScheduleFields> = ({ control }) => {
  return (
    <View>
      <Text className="font-medium text-xl mb-1">Train №:</Text>

      <Field<ICreateSchedule>
        placeholder="Enter train number"
        name="trainNumber"
        control={control}
        rules={{
          required: "Arrival is required",
        }}
      />

      <Text className="font-medium text-xl mb-1">Train type:</Text>

      <Field<ICreateSchedule>
        placeholder="Enter train number"
        name="trainType"
        control={control}
        rules={{
          required: "Train type is required",
        }}
      />

      <Text className="font-medium text-xl mb-1">Arrival:</Text>

      <Field<ICreateSchedule>
        placeholder="Enter arrival"
        name="arrival"
        control={control}
        rules={{
          required: "Arrival is required",
        }}
      />

      <Text className="font-medium text-xl mb-1">Departure:</Text>

      <Field<ICreateSchedule>
        placeholder="Enter departure"
        name="departure"
        control={control}
        rules={{
          required: "Departure is required",
        }}
      />

      <Text className="font-medium text-xl mb-1">Price:</Text>

      <Field<ICreateSchedule>
        placeholder="Enter price"
        name="price"
        control={control}
        keyboardType="numeric"
        rules={{
          required: "Price is required",
        }}
      />
    </View>
  );
};

export default CreateScheduleFields;
