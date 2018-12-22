// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../style/themes/default'
import { PreviewHeaderPropsType } from './PropsType'

const styles = StyleSheet.create({
  previewHeader: {
    paddingTop: theme.CellGapV,
    paddingBottom: theme.CellGapV,
    paddingRight: theme.CellGapH,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.CellBorderColor,
    marginLeft: theme.CellGapH,
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
