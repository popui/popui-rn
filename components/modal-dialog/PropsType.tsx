import React from 'react';
// import { observer } from 'mobx-react'
import {ModalProperties} from 'react-native'
import { MaskPropsType} from '../mask/PropsType'

export interface ModalPropsType<T> {
  modalProps:ModalProperties;
  maskProps:MaskPropsType;
  title?: React.ReactNode;
  closable?: boolean;
  actions?: ActionPropsType<T>[];
  onClose?: () => void;
  operation?: boolean;
  renderActionButton?: (action: ActionPropsType<any>, index: number)=>React.ReactNode
  renderActions?: ()=>React.ReactNode
  renderCloseButton?: ()=>React.ReactNode
}

export interface ActionPropsType<T> {
  text: string;
  type?: 'default' | 'primary' | 'warn'
  onPress?: () => void | Promise<any>;
  style?: T | string;
}

export type Callback = (valueOrLogin: string, password?: string) => void;
export type CallbackOrActions<T> = Callback | ActionPropsType<T>[];



