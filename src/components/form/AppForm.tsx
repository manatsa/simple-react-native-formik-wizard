import { Formik } from "formik";
import React from "react";

interface AppFormProps {
  initialValues: {}[];
  onSubmit: (val: any) => void;
  validationSchema: {}[];
  children: any;
}

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {() => children}
    </Formik>
  );
};

export default AppForm;
