import React from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewPropTypes,
} from 'react-native'
import WeuiIcon from '../weui-icon'

const styles = StyleSheet.create({
  galleryDelete: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const GalleryDelete = ({ style, ...others }) => (
  <TouchableWithoutFeedback {...others}>
    <View style={[styles.galleryDelete, style]}>
      <WeuiIcon name="delete" />
    </View>
  </TouchableWithoutFeedback>
)

GalleryDelete.propTypes = {
  style: ViewPropTypes.style,
}

export default GalleryDelete
