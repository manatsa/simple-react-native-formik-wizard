import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { AppForm, AppFormField } from "./components/form";
import * as yup from "yup";
import FormikStepper from "./components/FormikStepper";
import AppFormPicker from "./components/form/AppFormPicker";
import AppSubmitButtonSmall from "./components/form/AppSubmitButtonSmall";
import AppButtonSmall from "./components/wrappers/AppButtonSmall";
import AppFormNumberInput from "./components/form/AppFormNumberInput";
import AppFormCheckBoxes from "./components/form/AppFormCheckBoxes";
import AppFormRadio from "./components/form/AppFormRadio";
import AppFormSwitch from "./components/form/AppFormSwitch";

export default function Example() {
  const [mergedValues, setMergedValues] = useState({});

  const submit = (values: []) => {
    console.log(values);
  };

  const initialValues = [
    {
      fullName: "",
      gender: "",
      age: "",
      category: 0,
      isItTrue: false,
    },
    {
      progLang: [], // multiselect checkboxes
      hobby: "", //radio
    },
  ];

  const validationSchema = [
    yup.object().shape({
      fullName: yup
        .string()
        .required("required")
        .test(
          "",
          "please enter fullname",
          (name: any) => name && name.split(" ").length > 1
        ),
      gender: yup.string().required("required"),
      age: yup.number().positive("Age must be positive"),
      category: yup.number().min(1, "Number to be positive"),
    }),
    yup.object().shape({
      progLang: yup.array().length(2, "Array must have at least 2 items"),
    }),
  ];

  const steps = { 0: Step1, 1: Step2 };

  const stepLabels = ["Step 1", "Step 2"];

  return (
    <FormikStepper
      steps={steps}
      stepLabels={stepLabels}
      initialValues={initialValues}
      validationSchema={validationSchema}
      mergedValues={mergedValues}
      setMergedValues={setMergedValues}
      onSubmit={submit}
    />
  );
}

// Now create first step
const Step1 = ({ initValues, validationSchema, onNextStep, onBack }) => {
  const genderOptions = [
    { label: "Male", value: "0" },
    { label: "Female", value: "1" },
    { label: "Other", value: "2" },
    { label: "T1", value: "3" },
    { label: "Xsgha", value: "4" },
    { label: "Linda", value: "5" },
    { label: "Jayz", value: "6" },
    { label: "Rita", value: "7" },
    { label: "Gayther", value: "8" },
    { label: "Valery", value: "9" },
    { label: "Rima", value: "10" },
    { label: "Edward chirichogaumwecheteAndonemorethings", value: "11" },
    { label: "Simba", value: "12" },
    { label: "Heydon", value: "13" },
    { label: "Watson", value: "14" },
  ];
  return (
    <AppForm
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={onNextStep}
    >
      <AppFormField name={"fullName"} label={"your full name"} />
      <AppFormPicker
        name={"gender"}
        items={genderOptions}
        label={"select gender"}
        icon="none"
      />

      <AppFormSwitch name={"isItTrue"} label={"Accept Terms"} />
      <AppFormNumberInput name={"category"} label={"Select category number"} />

      <View
        style={{ width: "100%", alignItems: "flex-end", paddingHorizontal: 10 }}
      >
        <AppSubmitButtonSmall title={"Next"} />
      </View>
    </AppForm>
  );
};

// Now create second step
const Step2 = ({ initValues, validationSchema, onNextStep, onBack }) => {
  const progLangOptions = [
    { label: "Javascript", value: "0" },
    { label: "Typescript", value: "1" },
    { label: "Java", value: "2" },
    { label: "VB.Net", value: "3" },
    { label: "C#", value: "4" },
    { label: "C++", value: "5" },
  ];
  const hobbiesOptions = [
    { label: "Music", value: "0" },
    { label: "Sports", value: "1" },
  ];
  return (
    <AppForm
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={onNextStep}
    >
      <AppFormCheckBoxes
        items={progLangOptions}
        label={"Select favorite Language"}
        name={"progLang"}
        callback={null}
      />
      <AppFormRadio
        items={hobbiesOptions}
        name={"hobby"}
        label={"Select hobby"}
        row="column"
      />

      <View
        style={{
          width: "100%",
          marginHorizontal: 30,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <AppButtonSmall title={"Back"} onPress={onBack} />
        <AppSubmitButtonSmall title={"Save"} />
      </View>
    </AppForm>
  );
};

const styles = StyleSheet.create({});
