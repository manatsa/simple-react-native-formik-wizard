import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

interface AppTextProps {
  children?: any;
  style?: {};
}

function AppText({ children, style }: AppTextProps) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
