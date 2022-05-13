import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PickerItem from "./PickerItem";

type AppPickerProps = {
  icon?: string | undefined;
  value: any;
  onValueChange: (val: any) => void;
  items: { label: any; value: any }[];
  prompt?: string;
  containerStyle?: {};
  defaultColor?: string;
  optionsBoldText?: boolean;
  optionsTextSize?: number;
  optionsHeaderBackgroundColor?: string;
  optionsHeaderTextColor?: string;
  width: any;
  callback?: (val: any) => void;
};

function AppPicker({
  icon,
  value,
  onValueChange,
  items,
  prompt,
  containerStyle,
  defaultColor,
  optionsBoldText = true,
  optionsTextSize = 20,
  width = "100%",
  optionsHeaderBackgroundColor = "dodgerblue",
  optionsHeaderTextColor = "white",
  callback,
}: AppPickerProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={[styles.container, { width: width }]}>
        {(icon || icon !== "none") && (
          <MaterialCommunityIcons
            name={icon}
            style={styles.icon}
            size={20}
            color={defaultColor}
          />
        )}
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.touchableContainer}
        >
          <View style={styles.component}>
            <Text
              style={[
                styles.text,
                {
                  color: defaultColor,
                  fontSize: optionsTextSize,
                  fontWeight: optionsBoldText ? "bold" : "normal",
                  overflow: "hidden",
                  paddingTop: 0,
                },
              ]}
            >
              {value
                ? items.find((i) => i.value === value)?.label
                : prompt
                ? prompt
                : ""}
            </Text>
            <MaterialCommunityIcons
              name={"chevron-down"}
              style={styles.icon}
              size={20}
              color={defaultColor}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        visible={show}
        animationType={"fade"}
        collapsable={true}
        onRequestClose={() => setShow(false)}
        style={styles.dialog}
      >
        <View style={styles.outer}>
          <View style={styles.inner}>
            <Text
              style={[
                styles.header,
                {
                  width: "100%",
                  backgroundColor: optionsHeaderBackgroundColor,
                  color: optionsHeaderTextColor,
                },
              ]}
            >
              Select One
            </Text>
            <ScrollView contentContainerStyle={styles.itemsContainer}>
              {items.map((item: any, index: number) => {
                return (
                  <PickerItem
                    key={"ind-" + item.value}
                    label={item.label}
                    optionsBoldText={optionsBoldText}
                    onPress={() => {
                      callback ? callback(item.value) : null;
                      onValueChange(item.value);
                      setShow(false);
                    }}
                    backColor={index % 2 === 1 ? "#eee" : "white"}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 0,
    borderWidth: 2,
    justifyContent: "center",
    borderColor: "#efefef",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  dialog: {
    opacity: 0.6,
  },
  outer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  inner: {
    height: 300,
    width: 360,
    opacity: 1,
    borderColor: "#dfdfdf",
    borderWidth: 3,
    borderRadius: 20,
    elevation: 20,
  },
  touchableContainer: {
    width: "100%",
  },
  component: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    paddingRight: 10,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "dodgerblue",
  },
  itemsContainer: {
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    padding: 20,
  },
});
export default AppPicker;
