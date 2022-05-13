import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface dotProps {
  defaultStepColor: string;
  activeStepColor: string;
  completedStepColor: string;
  completed: boolean;
  activeStep: boolean;
  stepNumber: number;
}

export default function ({
  defaultStepColor = "grey",
  activeStepColor = "lightgreen",
  completedStepColor = "green",
  completed = false,
  activeStep = false,
  stepNumber,
}: dotProps) {
  return (
    <View
      style={[
        styles.connector,
        {
          backgroundColor: completed
            ? completedStepColor
            : activeStep
            ? activeStepColor
            : defaultStepColor,
          flex: stepNumber > 1 ? 1 : 0,
        },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  connector: {
    alignItems: "center",
    width: "100%",
    zIndex: -10,
    height: 5,
  },
});
