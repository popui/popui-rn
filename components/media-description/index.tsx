// import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import theme from '../style/themes/default'
import { MediaDescriptionPropsType } from './PropsType'

const styles = create({
  mediaDesc: {
    fontSize: 13,
    color: theme.TextColorGray,
    lineHeight: 13 * 1.2,
    android: {
      lineHeight: Math.round(13 * 1.2),
    },
  },
})

const MediaDescription = ({
  style,
  children,
  ...others
}: MediaDescriptionPropsType) => (
  <Text style={[styles.mediaDesc, style]} numberOfLines={2} {...others}>
    {children}
  </Text>
)

// MediaDescription.propTypes = {
//     style: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default MediaDescription
