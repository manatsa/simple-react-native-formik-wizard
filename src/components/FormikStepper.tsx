import { ScrollView, StyleSheet, View } from "react-native";
import React, { ReactNode, useState } from "react";
import StepIndicator from "../stepper/Indicator";
import constants from "expo-constants";

interface FormikStepperProps {
  steps: { key: number; value: ReactNode };
  initialValues: {}[];
  validationSchema: {}[];
  stepLabels: string[];
  onSubmit: (val: any, func: (val: any) => void) => void;
  mergedValues: {};
  setMergedValues: (val: any) => void;
}

/**
 * Formik form wizard engine. This component contains the logic to switch the component views, setting the initial values for each view,
 * its validation schema, as well as managing state for each view.
 * @param {object} steps - an object where key is anything numbers, strings, etc and the value is the Component reference eg {0: ExampleComponent}.
 * @param {Array} initialValues - an array of objects where the objects are corresponding to the steps
 * @param {Array} validationSchema - a yup object array containing corrsponding validation objects for each step
 * @param {Array} stepLabels - an array of strings with description for each step( this will appear under steps indicator on each step)
 * @param {function} onSubmit - a function which collects all the values when user hits submit
 * @param {object} mergedValues - the object collecting all the data as user goes through the steps. It has to be a state variable.
 * @param {function} setMergedValues - a function that sets the state variable mergedValues.
 * @returns current view depending on the step the user is on.
 * @author Manatsa Chinyeruse <manatsachinyeruse@gmail.com>
 */
export default function FormikStepper({
  steps,
  initialValues,
  validationSchema,
  stepLabels,
  onSubmit,
  mergedValues,
  setMergedValues,
}: FormikStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  let currentInitValues = initialValues[currentStep];
  const currentValidationSchema = validationSchema[currentStep];

  const isFirstStep = () => {
    return currentStep === 0;
  };

  const submit = currentStep >= initialValues.length - 1 ? true : false;

  // if (!submit) {
  //   const keys = Object.keys(currentInitValues);
  //   keys.forEach((key) => {
  //     const initVal = currentInitValues[key];
  //     const currentVal = mergedValues[key];
  //     currentInitValues[key] = currentVal ? currentVal : initVal;
  //   });
  // }

  const onNextStep = (value: {}) => {
    let mVals = { ...mergedValues, ...value };
    setMergedValues(mVals);
    if (submit) {
      onSubmit(mVals, setCurrentStep);
      setCurrentStep(0);
    } else {
      let nextStep = currentStep + 1;
      setCurrentStep(nextStep);
    }
  };

  const numberOfSteps = Object.keys(steps).length;

  const onBack = () => {
    if (!isFirstStep()) {
      let previousStep = currentStep - 1;
      setCurrentStep(previousStep);
    }
  };

  const currentStepComponent: any = steps[currentStep];

  return (
    <>
      <View style={styles.stepperContainer}>
        <StepIndicator
          currentStep={currentStep + 1}
          labels={stepLabels}
          completedStepColor="orange"
          defaultStepColor="pink"
          completedStepNumberColor="blue"
          defaultStepNumberColor="purple"
          activeStepColor="violet"
        />
      </View>

      {React.createElement(
        currentStepComponent,
        {
          initValues: currentInitValues,
          validationSchema: currentValidationSchema,
          onNextStep: onNextStep,
          onBack: onBack,
        },
        ""
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
  },
  stepperContainer: {
    marginTop: constants.statusBarHeight + 10,
    marginBottom: 20,
    width: "100%",
    height: 65,
  },
  contentContainer: {
    width: "100%",
    marginHorizontal: 3,
  },
});
