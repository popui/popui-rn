import React from 'react';
// import { observer } from 'mobx-react'
export interface ModalPropsType<T> {
  title?: React.ReactNode;
  visible: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  footer?: ActionPropsType<T>[];
  onClose?: () => void;
  transparent?: boolean;
  popup?: boolean;
  animated?: boolean;
  animationType?: any;
  onAnimationEnd?: (visible: boolean) => void;
  animateAppear?: boolean;
  operation?: boolean;
}

export interface ActionPropsType<T> {
  text: string;
  type?: 'default' | 'primary' | 'warn'
  onPress?: () => void | Promise<any>;
  style?: T | string;
}

export type Callback = (valueOrLogin: string, password?: string) => void;
export type CallbackOrActions<T> = Callback | ActionPropsType<T>[];
