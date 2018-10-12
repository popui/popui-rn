import React from 'react';
export type TextAreaEventHandle = (val?: string) => void;
export interface TextAreaItemPropsType {
  title?: React.ReactNode;
  maxLength?: number;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  rows?: number;
  count?: number;
  error?: boolean;
  onErrorPress?: () => void;
  onClearPress?: () => void;
  autoHeight?: boolean;
  editable?: boolean;
  disabled?: boolean;
  labelNumber?: number;

  onChange?: TextAreaEventHandle;
  onBlur?: TextAreaEventHandle;
  onFocus?: TextAreaEventHandle;
}
