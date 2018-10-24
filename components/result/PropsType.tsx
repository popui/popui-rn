import React from 'react';


export interface ResultPropsType {
  imgUrl?: string;
  iconName?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  message?: React.ReactNode;
  renderButtons?:Function
  extra?:React.ReactNode;
}
