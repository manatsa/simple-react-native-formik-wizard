import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
}

function AppButton({
  title,
  onPress,
  backgroundColor = "dodgerblue",
  textColor = "white",
  textSize = 16,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor, fontSize: textSize }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 65,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
  },
});
export default AppButton;
