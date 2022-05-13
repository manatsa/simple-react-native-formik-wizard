import { View, ActivityIndicator } from "react-native";

const MyActivityIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      //size can be "small" or "large"
      <ActivityIndicator size="large" color={"dodgerblue"} />
    </View>
  );
};
