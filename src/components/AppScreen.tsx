import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import constants from "expo-constants";

function AppScreen({ children }: any) {
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: constants.statusBarHeight,
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
});
export default AppScreen;
