import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type PickerItemProps = {
  label: string;
  onPress?: () => void;
  backColor?: string;
  optionsBoldText?: boolean;
  optionsTextSize?: number;
};
export default function PickerItem({
  label,
  onPress,
  backColor,
  optionsBoldText,
  optionsTextSize,
}: PickerItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor: backColor }]}
    >
      <Text
        style={[
          styles.text,
          {
            fontWeight: optionsBoldText ? "bold" : "normal",
            fontSize: optionsTextSize,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
  },
});
