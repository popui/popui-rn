// import React from 'react';
import { observer } from 'mobx-react'

export interface WeuiButtonTextPropsType {
  style: any;
  children: any;
  type?: "default" | "primary" | "warn";
  size?: "small";
  plain?: boolean;
  disabled?: boolean;
  mainColor?: string;
}
