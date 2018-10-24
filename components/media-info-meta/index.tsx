// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MediaInfoMetaPropsType } from './PropsType'

const styles = StyleSheet.create({
  mediaInfoMeta: {
    paddingRight: 13 * 1,
  },
  mediaInfoMetaExtra: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: '#CECECE',
    paddingLeft: 13 * 1,
  },
  mediaInfoMetaText: {
    fontSize: 13,
    color: '#CECECE',
  },
})

const MediaInfoMeta = ({
  extra,
  style,
  textStyle,
  children,
  ...others
}: MediaInfoMetaPropsType) => (
  <View
    style={[
      styles.mediaInfoMeta,
      extra ? styles.mediaInfoMetaExtra : {},
      style,
    ]}
  >
    <Text style={[styles.mediaInfoMetaText, textStyle]} {...others}>
      {children}
    </Text>
  </View>
)

// MediaInfoMeta.propTypes = {
//     extra: PropTypes.bool,
//     style: ViewPropTypes.style,
//     textStyle: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default MediaInfoMeta
