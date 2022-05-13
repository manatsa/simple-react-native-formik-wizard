import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";
import AppRadio from "../wrappers/AppRadio";
import { StyleSheet, View } from "react-native";
import AppText from "../wrappers/AppText";

interface AppFormRadioProps {
  name: string;
  label: string;
  items: { label: any; value: any }[];
  format?: string;
}

function AppFormRadio({ name, label, items, format }: AppFormRadioProps) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <View>
      <View style={styles.container}>
        <AppText style={{ paddingRight: 10 }}>{label}</AppText>
        <AppRadio
          items={items}
          onValueChange={(item) => {
            setFieldValue(name, item);
          }}
          value={values[name]}
          format={format}
        />
      </View>

      <AppErrorMessage message={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", flexDirection: "row" },
});
export default AppFormRadio;
