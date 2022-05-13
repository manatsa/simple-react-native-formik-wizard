import React from "react";
import { View, StyleSheet, Platform, TextInput } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface AppTextInputProps {
  icon?: string;
  iconSize?: number;
  style?: {};
}

function AppTextInput({
  icon,
  iconSize = 35,
  style,
  ...otherProps
}: AppTextInputProps) {
  return (
    <View style={styles.container}>
      {icon && icon !== "none" && icon !== "" && (
        <MaterialIcons name={icon} style={styles.icon} size={iconSize} />
      )}
      <TextInput style={[styles.textInput, style]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    // paddingHorizontal: 15,
    marginTop: 20,
    flexDirection: "row",
    minHeight: 50,
  },
  textInput: {
    width: "100%",
    color: "#6960EC",
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    fontSize: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
  icon: {
    color: "#6960EC",
    paddingRight: 10,
  },
});

export default AppTextInput;
