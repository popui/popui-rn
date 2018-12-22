// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../style/themes/default'
import { PreviewFooterPropsType } from './PropsType'
const styles = StyleSheet.create({
  previewFooter: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.DialogLineColor,
  },
})

const PreviewFooter = ({
  style,
  children,
  ...other
}: PreviewFooterPropsType) => (
  <View style={[styles.previewFooter, style]} {...other}>
    {children}
  </View>
)

// PreviewFooter.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
// }

export default PreviewFooter
