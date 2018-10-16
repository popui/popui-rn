// import React from 'react';
export interface ImageItemFuncArgs {
  item:ImageItemPropType,
  index:number
}
export interface ImagePickerPropTypes {
  style?: {};
  files?: Array<ImageItemPropType>;
  onChange?: (files: Array<ImageItemPropType>, operationType: string, index?: number) => void;
  onImageClick?: (index?: number, files?: Array<ImageItemPropType>) => void;
  onAddImageClick?: () => void;
  onFail?: (msg: string) => void;
  pickerOptions?:any
  renderHeader?:()=>React.ReactNode
  selectable?: boolean;
  maxCount?:number
  // multiple?: boolean;
  accept?: string;
}

export interface ImageItemPropType {
  isVertical?:boolean
  error?:boolean
  loading?:boolean
  statusText?:string
  uri: string;
  width: number;
  height: number;
  type?: string;
}
