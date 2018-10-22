import React from 'react';
// import { observer } from 'mobx-react'
import topView from 'rn-topview';
import PromptContainer from './PromptContainer';
import { PromotArgs } from './PropsType';

export function prompt({
  title,
  message,
  callbackOrActions,
  type = 'default',
  defaultValue = '',
  placeholders = ['', ''],
}:PromotArgs) {
  if (!callbackOrActions) {
    // tslint:disable-next-line:no-console
    console.error('Must specify callbackOrActions');
    return;
  }

  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <PromptContainer
      title={title}
      message={message}
      actions={callbackOrActions}
      type={type as any}
      defaultValue={defaultValue}
      onAnimationEnd={onAnimationEnd}
      placeholders={placeholders}
    />,
  );
}


export default {
  prompt
}