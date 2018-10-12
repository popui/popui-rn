import React from 'react';
export type InputEventHandler = (value?: string) => void;
import {
  GestureResponderEvent,
} from 'react-native';
export interface TextInputControlsPropsType {
  editable?: boolean;
  disabled?: boolean;
  value?: string;
  clear?: boolean;
  extra?: React.ReactNode;
  error?: boolean;
  // size?: 'large' | 'small';
  styles?: any;
  style?: any;
  locale?: object;
  onExtraPress?: (event: GestureResponderEvent) => void;
  onErrorPress?: (event: GestureResponderEvent) => void;
  onClearPress?: (event: GestureResponderEvent) => void;
}
