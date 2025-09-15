import { Pressable, Text, View } from "react-native";
import Layout from "@/component/layout/Layout";
import { FC, useState } from "react";
import cn from "clsx";

interface FilterProps {
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
  onClear: () => void;
}

const FilterScheduleByType: FC<FilterProps> = ({
  options,
  selected,
  onSelect,
  onClear,
}) => {
  return (
    <View>
      <Text className="font-medium text-xl">Filter by type:</Text>

      <Text className="text-lg">
        Current selected: {selected ? selected : "None"}
      </Text>

      <View>
        {options.map((item) => (
          <Pressable key={item} onPress={() => onSelect(item)}>
            <Text
              className={cn(
                `${selected === item ? "text-2xl font-semibold color-mainGreen" : "color-black"}`,
              )}
            >
              {item}
            </Text>
          </Pressable>
        ))}

        <Pressable onPress={onClear}>
          <Text className="color-mainBlue font-medium text-lg mt-3">Clear</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FilterScheduleByType;
