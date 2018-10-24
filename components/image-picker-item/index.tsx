import * as React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import WeuiIcon from '../weui-icon'
import plainStyles from './style'
const defaultStyles = StyleSheet.create<any>(plainStyles)
import { ImagePickerItemProps, ImagePickerItemState } from './PropsType'
import { ImageItemFuncArgs } from '../image-picker/PropsType'
import { noopFunc } from '../_util/noop'

export default class ImagePickerItem extends React.Component<
  ImagePickerItemProps,
  ImagePickerItemState
> {
  static defaultProps = {
    styles: defaultStyles,
    onImagePress: noopFunc,
    onImageClosePress: noopFunc,
  }

  onImagePress = (options: ImageItemFuncArgs) => {
    const { onImagePress } = this.props
    if (onImagePress) {
      onImagePress(options)
    }
  }
  onImageClosePress = (options: ImageItemFuncArgs) => {
    const { onImageClosePress } = this.props
    if (onImageClosePress) {
      onImageClosePress(options)
    }
  }
  renderImageItem = (options: ImageItemFuncArgs) => {
    const styles = this.props.styles!
    const { uri, isVertical } = options.item
    const source = { uri, isVertical }
    return (
      <TouchableOpacity
        key={`image-picker-item-touch-${options.index}`}
        onPress={() => this.onImagePress(options)}
        activeOpacity={0.6}
      >
        <View>
          <Image source={source} style={styles.uploaderFileImage} />
          {this.renderImageCenterContentView(options)}
        </View>
      </TouchableOpacity>
    )
  }
  renderImageCenterContentView = (options: ImageItemFuncArgs) => {
    const styles = this.props.styles!
    const { error, statusText, loading } = options.item
    let content: any = null
    if (error) {
      content = <WeuiIcon name="warn" />
    }
    if (statusText) {
      content = <Text style={styles.uploaderStatusText}>{statusText}</Text>
    }
    if (loading) {
      content = <ActivityIndicator color="#fff" />
    }
    if (content) {
      return <View style={styles.uploaderStatusContainer}>{content}</View>
    }
    return null
  }
  renderImageCloseView = (options: ImageItemFuncArgs) => {
    const styles = this.props.styles!
    return (
      <TouchableOpacity
        onPress={() => this.onImageClosePress(options)}
        style={styles.uploaderRemoveIcon}
        activeOpacity={0.6}
      >
        <WeuiIcon name="clear" size={16} />
      </TouchableOpacity>
    )
  }
  public render() {
    const styles = this.props.styles!
    const { item, index } = this.props
    const options = { item, index }
    return (
      <View
        key={`image-picker-item-container-${index}`}
        style={styles.uploaderFile}
      >
        {this.renderImageItem(options)}
        {this.renderImageCloseView(options)}
      </View>
    )
  }
}
