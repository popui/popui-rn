// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { themeStore } from '../theme-store'
const { themeVars } = themeStore
import { PreviewFooterPropsType } from './PropsType'
const styles = StyleSheet.create({
  previewFooter: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: themeVars.DialogLineColor,
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
