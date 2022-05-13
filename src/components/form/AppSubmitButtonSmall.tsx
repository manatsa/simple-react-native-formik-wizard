import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../wrappers/AppButton";
import AppButtonSmall from "../wrappers/AppButtonSmall";

interface AppSubmitButtonProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
}

function AppSubmitButtonSmall({
  title,
  backgroundColor,
  textColor,
  textSize,
}: AppSubmitButtonProps) {
  const { handleSubmit } = useFormikContext();
  return <AppButtonSmall title={title} onPress={handleSubmit} />;
}

export default AppSubmitButtonSmall;
