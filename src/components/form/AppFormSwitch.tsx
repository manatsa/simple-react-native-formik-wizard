import { useFormikContext } from "formik";
import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../wrappers/AppText";
import AppSwitch from "../wrappers/AppSwitch";

function AppFormSwitch({ name, label }: { name: string; label: string }) {
  const { values, setFieldValue } = useFormikContext();
  return (
    <View style={styles.container}>
      <AppText>{label}</AppText>
      <AppSwitch
        onValueChange={(item) => setFieldValue(name, item)}
        value={values[name]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    width: 40,
    alignSelf: "flex-end",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
export default AppFormSwitch;
