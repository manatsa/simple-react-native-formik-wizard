import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

enum SWITCHSIZE {
  large = "large",
  small = "small",
}
interface SwitchProps {
  onValueChange: (val: any) => void;
  value: boolean;
  defaultTrackColor?: string;
  selectedTrackColor?: string;
  defaultKnobColor?: string;
  size?: SWITCHSIZE | string;
}
export default function AppSwitch({
  onValueChange,
  value,
  defaultTrackColor = "#ccc",
  selectedTrackColor = "dodgerblue",
  defaultKnobColor = "#eee",
  size = SWITCHSIZE.small,
}: SwitchProps) {
  const [selected, setSelected] = useState(false);

  const toggleSwitch = () => {
    onValueChange(!selected);
    setSelected(!selected);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View
        style={[
          styles.container,
          {
            width: size === SWITCHSIZE.small ? 90 : "100%",
            backgroundColor:
              value || selected ? selectedTrackColor : defaultTrackColor,
            alignItems: value || selected ? "flex-end" : "flex-start",
          },
        ]}
      >
        <View
          style={[styles.knob, { backgroundColor: defaultKnobColor }]}
        ></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  knob: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});
