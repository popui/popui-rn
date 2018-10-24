// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { themeStore } from '../theme-store'
const { themeVars } = themeStore
import { PreviewHeaderPropsType } from './PropsType'

const styles = StyleSheet.create({
  previewHeader: {
    paddingTop: themeVars.CellGapV,
    paddingBottom: themeVars.CellGapV,
    paddingRight: themeVars.CellGapH,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: themeVars.CellBorderColor,
    marginLeft: themeVars.CellGapH,
  },
})

const PreviewHeader = ({
  style,
  children,
  ...other
}: PreviewHeaderPropsType) => {
  const childrenWithProps = React.Children.map(children, (child: any) => {
    if (child.type.name === 'PreviewItem') {
      return React.cloneElement(child, { preset: 'header' })
    }
    return child
  })

  return (
    <View style={[styles.previewHeader, style]} {...other}>
      {childrenWithProps}
    </View>
  )
}

// PreviewHeader.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
// }

export default PreviewHeader
