import React from "react";
import AppTextInput from "../wrappers/AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../wrappers/AppText";
import AppNumberInput from "../wrappers/AppNumberInput";

function AppFormNumberInput({
  name,
  label,
  ...otherProps
}: {
  name: string;
  label: string;
}) {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();
  return (
    <>
      {<Text>{errors[name]}</Text>}
      <View style={styles.container}>
        {label && <AppText>{label}</AppText>}
        <AppNumberInput
          onValueChange={(value) => setFieldValue(name, value)}
          value={values[name] || ""}
          {...otherProps}
        />
        <AppErrorMessage message={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
  },
});
export default AppFormNumberInput;
