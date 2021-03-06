import React from 'react'
import { StyleSheet, View } from 'react-native'
import themeVars from '../style/themes/default'
import { WeuiButtonAreaPropsType } from './PropsType'
const styles = StyleSheet.create({
  BtnArea: {
    marginTop: themeVars.CellsMarginTop,
    marginRight: themeVars.BtnDefaultGap,
    marginBottom: 16 * 0.3,
    marginLeft: themeVars.BtnDefaultGap,
  },
  BtnAreaInline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const WeuiButtonArea = ({
  direction = 'vertical',
  style,
  children,
}: WeuiButtonAreaPropsType) => {
  const buttonAreaStyle = [styles.BtnArea]
  if (direction === 'horizontal') {
    buttonAreaStyle.push(styles.BtnAreaInline)
  }
  return <View style={[...buttonAreaStyle, style]}>{children}</View>
}

export default WeuiButtonArea
