import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaskPropsType } from "./PropsType";
// import TouchableWithFallBack from '../touchable-with-fallback';
const styles = StyleSheet.create({
  mask: {
    flex: 1,
    zIndex: 1000,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Mask = ({
  transparent = false,
  style,
  onPress,
  children
}: MaskPropsType) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      style={[
        styles.mask,
        { backgroundColor: transparent ? "transparent" : "rgba(0,0,0,.6)" },
        style
      ]}
    >
      <View onStartShouldSetResponder={() => true}>{children}</View>
    </View>
  </TouchableWithoutFeedback>
);

export default Mask;
