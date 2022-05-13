import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Connector from "./Connector";
import colors from "../components/Colors";

interface dotProps {
  defaultStepColor?: string;
  activeStepColor?: string;
  completedStepColor?: string;
  currentStepColor?: string;
  completed?: boolean;
  activeStep: boolean;
  stepNumber: number;
  label?: string;
  defaultStepNumberColor?: string;
  completedStepNumberColor?: string;
  stepNumberFontSize?: number;
  labelFontSize?: number;
}

export default function ({
  defaultStepColor = "grey",
  activeStepColor = colors.success,
  completedStepColor = colors.active,
  currentStepColor = colors.active,
  completed = false,
  activeStep = false,
  stepNumber,
  label,
  defaultStepNumberColor = "black",
  completedStepNumberColor = "white",
  stepNumberFontSize = 12,
  labelFontSize = 12,
}: dotProps) {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: "center",
          flex: stepNumber > 1 ? 1 : 0,
          //backgroundColor: stepNumber == 1 ? "blue" : "white",
        },
      ]}
    >
      {stepNumber > 1 && (
        <Connector
          stepNumber={stepNumber}
          activeStep={activeStep}
          activeStepColor={activeStepColor}
          defaultStepColor={defaultStepColor}
          completed={completed}
          completedStepColor={completedStepColor}
        />
      )}

      <View
        style={[
          styles.dot,
          {
            borderColor: completed
              ? completedStepColor
              : activeStep
              ? activeStepColor
              : defaultStepColor,
            borderWidth: 5,
            backgroundColor: completed ? completedStepColor : "white",
          },
        ]}
      >
        <Text
          style={{
            color: completed
              ? completedStepNumberColor
              : defaultStepNumberColor,
            fontWeight: completed || activeStep ? "bold" : "normal",
            fontSize: stepNumberFontSize,
          }}
        >
          {stepNumber}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    // flexDirection: "column",
    // alignItems: "flex-start",
    // flex: 1,
    maxHeight: 100,
    // zIndex: 100,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 50,
  },
  dot: {
    flex: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
