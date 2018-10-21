import React from 'react';
import { observer } from 'mobx-react'

export interface CardPropsType {
  full?: boolean;
}

export interface CardHeaderPropsType {
  title?: React.ReactNode;
  /** need url of img, if this is string. */
  thumb?: React.ReactNode;
  extra?: React.ReactNode;
}

export interface CardFooterPropsType {
  content?: React.ReactNode;
  extra?: React.ReactNode;
}
