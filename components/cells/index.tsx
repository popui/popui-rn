import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
  cells: {
    marginTop: varibles.CellssMarginTop,
    backgroundColor: varibles.CellBg,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: varibles.CellBorderColor
  }
})

const Cells = ({ children, style, ...others }: any) => {
  const childrenWithProps = React.Children.map(children, (child, idx) => {
    if (idx === 0) {
      return React.cloneElement(child, { first: true })
    }
    return child
  })

  return (
    <View style={[styles.cells, style]} {...others}>
      {childrenWithProps}
    </View>
  )
}

Cells.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style
}

export default Cells
