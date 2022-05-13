import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Dot from "./Dot";
import Connector from "./Connector";
import LabelStrip from "./LabelStrip";

interface IndicatorProps {
  labels: string[];
  defaultStepColor?: string;
  completedStepColor?: string;
  defaultStepNumberColor?: string;
  completedStepNumberColor?: string;
  stepNumberFontSize?: number;
  labelFontSize?: number;
  currentStep: number;
  activeStepColor?: string;
}

export default function StepIndicator({
  labels,
  defaultStepColor = "grey",
  completedStepColor = "green",
  activeStepColor = "green",
  defaultStepNumberColor = "black",
  completedStepNumberColor = "white",
  stepNumberFontSize = 11,
  labelFontSize = 11,
  currentStep = 1,
}: IndicatorProps) {
  if (labels.length < 1) {
    throw new Error("Number of steps to be at least 1");
  }
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        {labels.map((lab, index) => {
          return (
            <Dot
              key={index}
              label={lab}
              stepNumber={index + 1}
              completed={currentStep > index + 1}
              activeStep={index + 1 === currentStep}
              defaultStepColor={defaultStepColor}
              currentStepColor={activeStepColor}
              activeStepColor={activeStepColor}
              completedStepColor={completedStepColor}
              defaultStepNumberColor={defaultStepNumberColor}
              completedStepNumberColor={completedStepNumberColor}
              stepNumberFontSize={stepNumberFontSize}
              labelFontSize={labelFontSize}
            />
          );
        })}
      </View>
      <LabelStrip
        labels={labels}
        defaultStepColor={defaultStepColor}
        completedStepColor={completedStepColor}
        currentStep={currentStep}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
