import React from "React";
import { observer } from 'mobx-react';

export interface MediaPropsType {
  style?: any;
  children?: React.ReactNode;
  type?: "text" | "appmsg" | "small_appmsg";
  first?: boolean;
}
