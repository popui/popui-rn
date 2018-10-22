import * as React from 'react'
import { observer } from 'mobx-react';
import { View, StyleSheet, ensureComponentIsNative, Image } from 'react-native'
// import Image from 'expo-image-cache/src/Image'

// debug
import { createDebug } from '../_util/debug'
const debug = createDebug('popui:Image/CacheProgressiveImage/ImageBackground')

@observer
class ImageBackground extends React.Component {
  setNativeProps(props: any) {
    const viewRef = this._viewRef
    if (viewRef) {
      ensureComponentIsNative(viewRef)
      viewRef.setNativeProps(props)
    }
  }

  _viewRef = null

  _captureRef = (ref: any) => {
    this._viewRef = ref
  }

  render() {
    const { children, style, imageStyle, imageRef, ...props } = this.props
    const _imageStyle = [
      StyleSheet.absoluteFill,
      {
        width: style.width,
        height: style.height
      },
      imageStyle
    ]
    debug('render', { style, _imageStyle })
    return (
      <View
        accessibilityIgnoresInvertColors
        style={style}
        ref={this._captureRef}
      >
        <Image {...props} style={_imageStyle} ref={imageRef} />
        {children}
      </View>
    )
  }
}

export default ImageBackground
