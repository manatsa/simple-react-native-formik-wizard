import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

interface LoadingButtonProps {
  isLoading: boolean;
  onPress: (e: GestureResponderEvent) => void | undefined;
  title?: string;
  loadingLabel?: string;
  backgroundColor?: string;
  indicatorColor?: string;
  buttonTextColor?: string;
  buttonTextSize?: number;
  indicatorSize?: number | "large" | "small";
}

export default function LoadingButton({
  isLoading,
  onPress,
  title,
  loadingLabel,
  backgroundColor = "dodgerBlue",
  indicatorColor = "green",
  buttonTextColor = "white",
  buttonTextSize = 16,
  indicatorSize = "large",
}: LoadingButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={isLoading ? undefined : onPress}>
        <View
          style={[
            styles.button,
            { backgroundColor: isLoading ? "grey" : backgroundColor },
          ]}
        >
          {isLoading && (
            <ActivityIndicator size={indicatorSize} color={indicatorColor} />
          )}
          <Text
            style={[
              styles.buttonText,
              { color: buttonTextColor, fontSize: buttonTextSize },
            ]}
          >
            {isLoading ? loadingLabel : title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 70,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
