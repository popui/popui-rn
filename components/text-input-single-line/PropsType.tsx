import React from 'react';
export type InputEventHandler = (value?: string) => void;

export interface TextInputSingleLinePropsType {
  // left?: React.ReactNode;
  // right?: React.ReactNode;
  type?:
    | 'text'
    | 'bankCard'
    | 'phone'
    | 'password'
    | 'number'
    | 'digit';
  editable?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  maxLength?: number;
  extra?: React.ReactNode;
  error?: boolean;
  // can not find out where it used
  onErrorPress?: Function;
  // size?: 'large' | 'small';
  labelNumber?: number;
  labelPosition?: 'left' | 'top';
  textAlign?: 'left' | 'center';
  updatePlaceholder?: boolean;
  styles?: any;
  style?: any;
  locale?: object;
  onChangeText?: (text: string) => void;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
  onVirtualKeyboardConfirm?: InputEventHandler;
}
