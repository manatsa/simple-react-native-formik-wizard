import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../Colors";

enum POSITION {
  start = "start",
  end = "end",
}

interface CheckBoxProps {
  onValueChange: (params: any) => any;
  value: boolean;
  checkedColor?: string;
  unCheckedColor?: string;
  boxColor?: string;
  boxSize?: number;
  label?: string;
  labelPosition?: POSITION | string;
}

export default function AppCheckBox({
  onValueChange,
  value = false,
  checkedColor = colors.active,
  unCheckedColor = colors.inactive,
  boxColor = colors.default,
  boxSize = 30,
  labelPosition = POSITION.start,
  label,
}: CheckBoxProps) {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    onValueChange(!checked);
    setChecked(!checked);
  };
  return (
    <TouchableWithoutFeedback onPress={toggleCheckbox}>
      <View style={styles.checkContainer}>
        {labelPosition == POSITION.start && <Text>{label}</Text>}
        <View
          style={[
            styles.checkbox,
            { width: boxSize, height: boxSize, borderColor: boxColor },
          ]}
        >
          <FontAwesome
            name="check"
            size={boxSize - 10}
            color={checked || value ? checkedColor : unCheckedColor}
          />
        </View>
        {labelPosition === POSITION.end && <Text>{label}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginHorizontal: 10,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
});
