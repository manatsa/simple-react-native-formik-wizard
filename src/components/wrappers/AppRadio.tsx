import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import AppText from "./AppText";

enum RADIOFORMAT {
  row = "row",
  column = "column",
}
interface AppRadioProps {
  onValueChange: (val: any) => void;
  value: any;
  items: {}[];
  format?: RADIOFORMAT | string;
  radioDefaultColor?: string;
  radioSelectedColor?: string;
  radioTextColor?: string;
  radioSize?: number;
  radioTextSize?: number;
}

function AppRadio({
  items,
  value,
  onValueChange,
  format = "row",
  radioDefaultColor = "dodgerblue",
  radioSelectedColor = "dodgerblue",
  radioTextColor = "dodgerblue",
  radioSize = 30,
  radioTextSize = 16,
}: AppRadioProps) {
  return (
    <View
      style={[
        styles.container,
        { flexDirection: format === "column" ? "column" : "row" },
      ]}
    >
      {items.map((res: any) => {
        return (
          <View
            key={res.value}
            style={[styles.container, { flexDirection: "row" }]}
          >
            <TouchableOpacity
              style={[styles.radioCircle, { borderColor: radioDefaultColor }]}
              onPress={() => onValueChange(res.value)}
            >
              {value === res.value && (
                <View
                  style={[
                    styles.selectedRb,
                    {
                      backgroundColor: radioSelectedColor,
                      width: radioSize / 2,
                      height: radioSize / 2,
                      borderRadius: radioSize / 4,
                    },
                  ]}
                />
              )}
            </TouchableOpacity>
            <AppText
              style={[
                styles.radioText,
                { color: radioTextColor, fontSize: radioTextSize },
              ]}
            >
              {res.label}
            </AppText>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  radioText: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: "500",
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 50,
  },
});
export default AppRadio;
