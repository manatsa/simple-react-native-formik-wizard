import { useFormikContext } from "formik";
import React from "react";
import LoadingButton from "../wrappers/LoadingButton";

type LoadingButtonType = {
  isLoading: boolean;
  title: string;
  loadingLabel?: string;
  color?: string;
  backgroundColor?: string;
  indicatorColor?: string;
  buttonTextColor?: string;
  buttonTextSize?: number;
  indicatorSize?: number | "small" | "large";
};

function AppFormLoadingSubmit({
  isLoading,
  title,
  loadingLabel = "Wait...",
  color = "dodgerblue",
  backgroundColor,
  indicatorColor,
  buttonTextColor,
  buttonTextSize,
  indicatorSize,
}: LoadingButtonType) {
  const { handleSubmit, values, errors } = useFormikContext();
  return (
    <LoadingButton
      title={title}
      onPress={handleSubmit}
      isLoading={isLoading}
      loadingLabel={loadingLabel}
      color={color}
      backgroundColor={backgroundColor}
      indicatorColor={indicatorColor}
      buttonTextColor={buttonTextColor}
      buttonTextSize={buttonTextSize}
      indicatorSize={indicatorSize}
    />
  );
}

export default AppFormLoadingSubmit;
