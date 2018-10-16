// import React from 'react';

export interface ImagePickerPropTypes {
  style?: {};
  files?: Array<ImageItemPropType>;
  onChange?: (files: Array<ImageItemPropType>, operationType: string, index?: number) => void;
  onImageClick?: (index?: number, files?: Array<ImageItemPropType>) => void;
  onAddImageClick?: () => void;
  onFail?: (msg: string) => void;
  allowsEditing?:boolean
  selectable?: boolean;
  multiple?: boolean;
  accept?: string;
}

export interface ImageItemPropType {
  uri: string;
  width: number;
  height: number;
  type?: string;
}
