import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";
import { StyleSheet, View } from "react-native";
import AppText from "../wrappers/AppText";
import AppCheckbox from "../wrappers/AppCheckBox";

interface AppCheckboProps {
  name: string;
  label: string;
  callback?: (val: any) => void;
}

function AppFormSingleCheckBox({ name, label, callback }: AppCheckboProps) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const onValueChange = (item: boolean) => {
    setFieldValue(name, item);
    callback ? callback(item, setFieldValue) : null;
  };

  return (
    <View style={styles.boxContainer}>
      <AppText style={styles.checkCategoryText}>{label}</AppText>
      <View style={styles.checkDetailsHolder}>
        <View style={styles.detailsContainer}>
          <AppCheckbox
            value={values[name]}
            onValueChange={(value) => onValueChange(value)}
          />
        </View>
      </View>

      {errors[name] && (
        <AppErrorMessage message={errors[name]} visible={touched[name]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    width: "95%",
    marginVertical: 5,
    alignItems: "center",
    marginHorizontal: 10,
  },
  checkDetailsHolder: {
    width: "100%",
  },
  detailsContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#E6E6FA",
  },
  checkbox: {
    color: "#6960EC",
    borderBottomColor: "#6960EC",
    borderBottomWidth: 1.5,
  },
  checkCategoryText: {
    width: "100%",
    overflow: "visible",
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  checkText: {
    width: "80%",
    overflow: "visible",
    flexWrap: "wrap",
  },
});
export default AppFormSingleCheckBox;
