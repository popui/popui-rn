import React from "react";
// 
import topView from "rn-topview";
import AlertContainer from "./AlertContainer";
import { AlertArgs } from "./PropsType";

export function alert({
  title,
  content,
  actions = [{ text: "OK" }]
}: AlertArgs) {
  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <AlertContainer
      title={title}
      content={content}
      actions={actions}
      onAnimationEnd={onAnimationEnd}
    />
  );
}

export default {
  alert
}
