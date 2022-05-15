import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../wrappers/AppText";
import AppCheckBox from "../wrappers/AppCheckBox";

type ItemType = {
  label: any;
  value: any;
};

type AppFormCheckBoxesType = {
  name: string;
  label: string;
  items: {}[];
  callback?: (val: any) => void;
  boxColor?: string;
  checkedColor?: string;
  unCheckedColor?: string;
  boxSize?: number;
  labelPosition?: "start" | "end";
};

function AppFormCheckBoxes({
  name,
  label,
  items,
  callback,
  boxColor,
  checkedColor,
  unCheckedColor,
  boxSize,
  labelPosition,
}: AppFormCheckBoxesType) {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const onValueChange = (value: {}, item: ItemType) => {
    let newValue: {}[] = [...values[name]];
    if (value === true) {
      !checkIfItemInArray(newValue, item) ? newValue.push(item.value) : null;
    } else {
      newValue = newValue.filter((t) => t !== item.value);
    }
    setFieldValue(name, newValue);
    callback ? callback(items) : null;
    console.log(newValue);
  };

  const checkIfItemInArray = (arrayValue: {}[], item: ItemType) => {
    let itemInArray = false;
    if (arrayValue?.filter((e) => e === item.value).length > 0) {
      itemInArray = true;
    }
    return itemInArray;
  };

  return (
    <View style={styles.boxContainer}>
      <AppText style={styles.checkCategoryText}>{label}</AppText>
      <View style={styles.checkDetailsHolder}>
        {items &&
          items.map((item, index) => {
            return (
              <View style={styles.detailsContainer} key={"c-" + index}>
                <AppCheckBox
                  value={
                    checkIfItemInArray(values[name], item as ItemType)
                      ? true
                      : false
                  }
                  onValueChange={(value) =>
                    onValueChange(value, item as ItemType)
                  }
                  boxColor={boxColor}
                  checkedColor={checkedColor}
                  unCheckedColor={unCheckedColor}
                  boxSize={boxSize}
                  labelPosition={labelPosition}
                />
                <Text style={styles.checkText}>{(item as ItemType).label}</Text>
              </View>
            );
          })}
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
export default AppFormCheckBoxes;
