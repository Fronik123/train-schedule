import { Pressable, Text, View } from "react-native";
import { FC, useState } from "react";
import cn from "clsx";

interface SortByDataProps {
  selected: boolean;
  onSelect: (value: boolean) => void;
}

const SortByData: FC<SortByDataProps> = ({ selected, onSelect }) => {
  return (
    <View>
      <Text className="font-medium text-xl">Filter by Date:</Text>

      <Pressable
        onPress={() => onSelect(!selected)}
        className={cn(
          `self-start border-mainGreen border-2 rounded-2xl ${selected ? "bg-mainGreen" : "bg-white"} p-3`,
        )}
      >
        <Text style={{ color: selected ? "white" : "black" }}>
          {selected ? "Newest First" : "Default Schedule"}
        </Text>
      </Pressable>
    </View>
  );
};

export default SortByData;
