import { ImageItemPropType, ImageItemFuncArgs } from '../image-picker/PropsType'
import { IImagePickerItemStyle } from './style'

export interface ImagePickerItemProps {
  item: ImageItemPropType
  index: number
  styles?: IImagePickerItemStyle
  onImagePress?: (options: ImageItemFuncArgs) => any
  onImageClosePress?: (options: ImageItemFuncArgs) => any
}

export interface ImagePickerItemState {}
