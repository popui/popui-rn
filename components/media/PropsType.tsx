import React from "React";

export interface MediaPropsType {
  style?: any;
  children?: React.ReactNode;
  type?: "text" | "appmsg" | "small_appmsg";
  first?: boolean;
}
