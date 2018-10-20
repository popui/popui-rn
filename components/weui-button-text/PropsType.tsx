// import React from 'react';

export interface ButtonTextPropsType {
  style: any;
  children: any;
  type?: "default" | "primary" | "warn";
  size?: "small";
  plain?: boolean;
  disabled?: boolean;
  mainColor?: string;
}
