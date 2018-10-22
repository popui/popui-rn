import React from 'react';
// import { observer } from 'mobx-react'
import topView from 'rn-topview';
import AlertContainer from './AlertContainer';
export interface AlertPropsType {
  title?: React.ReactNode,
  content?: React.ReactNode,
  actions?: any[]
} 

export default function alert(props:AlertPropsType) {
  const {
  title,
  content, 
  actions = [{ text: 'OK' }],
  } = props
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
    />,
  );
}
