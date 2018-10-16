import {IImagePickerHeaderStyle} from './style'

export interface ImagePickerHeaderProps {
    title?:string
    filesLength?:number
    showCountInfo?:boolean
    maxCount?:number
    styles?: IImagePickerHeaderStyle,
}
