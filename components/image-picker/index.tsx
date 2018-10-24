/* tslint:disable:jsx-no-multiline-js */
import React from 'react'
import { StyleSheet, View } from 'react-native'
// import ImageRoll from './ImageRoll';
import {
  ImagePickerPropTypes,
  ImageItemPropType,
  ImageItemFuncArgs,
} from './PropsType'
import imagePickerStyle, { IImagePickerStyle } from './style/index'
import Expo from 'expo'
import { ensureHasPermission } from '../_util/permission'
import ImagePickerItem from '../image-picker-item'
import ImagePickerAddButton from '../image-picker-add-button'

export interface ImagePickerNativeProps extends ImagePickerPropTypes {
  styles?: IImagePickerStyle
}
import { noopFunc } from '../_util/noop'
const imagePickerStyles = StyleSheet.create<any>(imagePickerStyle)

export default class ImagePicker extends React.Component<
  ImagePickerNativeProps,
  any
> {
  static defaultProps = {
    styles: imagePickerStyles,
    // tslint:disable-next-line:no-empty
    onChange() {},
    // tslint:disable-next-line:no-empty
    onFail() {},
    files: [],
    renderHeader: noopFunc,
    selectable: true,
    maxCount: 5,
  }

  showPicker = async () => {
    const { pickerOptions, onAddImageClick } = this.props
    if (onAddImageClick) {
      onAddImageClick()
      return
    }
    const { status } = await Expo.Permissions.getAsync(
      Expo.Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
      await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL)
    }
    await ensureHasPermission(Expo.Permissions.CAMERA_ROLL)
    let result = await Expo.ImagePicker.launchImageLibraryAsync(pickerOptions)
    if (!result.cancelled) {
      this.addImage(result)
    }
  }

  addImage(imageObj: ImageItemPropType) {
    const { files = [], onChange } = this.props
    const newImages = files.concat(imageObj)
    if (onChange) {
      onChange(newImages, 'add')
    }
  }

  removeImage(idx: number): void {
    const { files = [], onChange } = this.props
    const newImages: any[] = []

    files.forEach((image, index) => {
      if (index !== idx) {
        newImages.push(image)
      }
    })
    if (onChange) {
      onChange(newImages, 'remove', idx)
    }
  }

  onImageClick(idx: number) {
    if (this.props.onImageClick) {
      this.props.onImageClick(idx, this.props.files)
    }
  }
  renderImageItemView = (item: ImageItemPropType, index: number) => {
    return (
      <ImagePickerItem
        key={`ImagePickerItem-${index}`}
        item={item}
        index={index}
        onImagePress={(options: ImageItemFuncArgs) =>
          this.onImageClick(options.index)
        }
        onImageClosePress={(options: ImageItemFuncArgs) =>
          this.removeImage(options.index)
        }
      />
    )
  }
  renderImageItemsView = () => {
    const { files = [] } = this.props
    const filesView = files.map(this.renderImageItemView)
    return filesView
  }
  renderAddButtonView = () => {
    const { selectable, maxCount, files = [] } = this.props
    if (!selectable) {
      return null
    }
    if (files.length >= (maxCount as number)) {
      return null
    }
    return <ImagePickerAddButton onPress={this.showPicker} />
  }
  render() {
    const { selectable, renderHeader } = this.props
    const styles = this.props.styles!
    return (
      <View style={styles.container}>
        {renderHeader && renderHeader()}
        <View style={styles.uploaderBody}>
          {this.renderImageItemsView()}
          {this.renderAddButtonView()}
        </View>
      </View>
    )
  }
}
