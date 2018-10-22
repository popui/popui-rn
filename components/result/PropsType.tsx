import React from 'react';
import { observer } from 'mobx-react'

export interface ResultPropsType {
  imgUrl?: string;
  iconName?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  message?: React.ReactNode;
  renderButtons?:Function
  extra?:React.ReactNode;
}
