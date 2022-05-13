import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface LabelsProps {
  labels: string[];
  labelFontSize?: number;
  defaultStepColor?: string;
  completedStepColor?: string;
  currentStep: number;
}
export default function LabelStrip({
  labels,
  labelFontSize,
  defaultStepColor,
  completedStepColor,
  currentStep,
}: LabelsProps) {
  return (
    <View style={[styles.container]}>
      {labels.map((label, index) => {
        const color = "#" + Math.floor(7 % index) + "ef";
        return (
          <Text
            key={index}
            style={[
              styles.label,
              {
                width: `${100 / labels.length - 5}%`,
                color:
                  currentStep < index + 1
                    ? completedStepColor
                    : defaultStepColor,
                textAlign:
                  index == 0
                    ? "left"
                    : index === labels.length - 1
                    ? "right"
                    : "center",
              },
            ]}
          >
            {label}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  label: {
    marginHorizontal: 5,
  },
});
