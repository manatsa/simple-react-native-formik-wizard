import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../wrappers/AppButton";

interface AppSubmitButtonProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
}

function AppSubmitButton({
  title,
  backgroundColor,
  textColor,
  textSize,
}: AppSubmitButtonProps) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      backgroundColor={backgroundColor}
      textColor={textColor}
      textSize={textSize}
    />
  );
}

export default AppSubmitButton;
