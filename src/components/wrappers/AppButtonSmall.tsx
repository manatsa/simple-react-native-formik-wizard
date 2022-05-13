import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
}

function AppButtonSmall({
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
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    marginVertical: 5,
    elevation: 3,
    minWidth: "20%",
  },
  text: {
    fontWeight: "bold",
  },
});
export default AppButtonSmall;
