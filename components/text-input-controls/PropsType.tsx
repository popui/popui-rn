import React from 'react';
export type InputEventHandler = (value?: string) => void;

export interface TextInputControlsPropsType {
  clear?: boolean;
  extra?: React.ReactNode;
  error?: boolean;
  styles?: any;
  style?: any;
  locale?: object;
  onExtraPress?: () => void;
  onErrorPress?: () => void;
  onClearPress?: () => void;
}
