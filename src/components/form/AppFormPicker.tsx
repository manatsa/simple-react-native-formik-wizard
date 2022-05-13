import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";
import AppPicker from "../wrappers/AppPicker";
import { Alert, StyleSheet, View } from "react-native";
import AppText from "../wrappers/AppText";

interface AppFormPickerProps {
  icon?: string;
  name: string;
  label: string;
  items: { label: any; value: any }[];
  callback?: (val: any) => void;
}

function AppFormPicker({
  icon,
  name,
  label,
  items,
  callback,
}: AppFormPickerProps) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <View style={styles.pickerContainer}>
      <AppText
        style={{
          // textDecorationLine: "underline",
          width: "100%",
        }}
      >
        {label}
      </AppText>
      <AppPicker
        style={styles.picker}
        icon={icon | "none"}
        items={items}
        onValueChange={(item) => {
          callback ? callback(item) : null;
          setFieldValue(name, item);
        }}
        prompt={label}
        value={values[name]}
      />
      {errors[name] && (
        <AppErrorMessage message={errors[name]} visible={touched[name]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    width: "95%",
    marginVertical: 5,
    alignItems: "center",
    marginHorizontal: 10,
  },
  picker: {
    color: "#6960EC",
    borderBottomColor: "#6960EC",
    borderBottomWidth: 1.5,
  },
});
export default AppFormPicker;
