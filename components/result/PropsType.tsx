import React from 'react';
import { ImagePropertiesSourceOptions } from 'react-native';

export interface ResultPropsType {
  imgUrl?: ImagePropertiesSourceOptions;
  iconName?: string
  icon?: React.ReactNode
  title?: React.ReactNode
  message?: React.ReactNode
  renderButtons?: Function
  extra?: React.ReactNode
}
