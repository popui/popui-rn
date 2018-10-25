import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import themeVars from '../style/themes/default'
import CellsTitle from '../cells-title'
const styles = StyleSheet.create({
  container: {
    marginTop: themeVars.CellssMarginTop,
    backgroundColor: themeVars.CellBg,
    overflow: 'hidden',
  },
  cells: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: themeVars.CellBorderColor,
  },
})
function renderCellsTitle(title?:string){
  if(!title){
    return null
  }
  return (
    <CellsTitle>{title}</CellsTitle>
  )
}
const Cells = ({ children, style,title, ...others }: any) => {
  const childrenWithProps = React.Children.map(
    children,
    (child: any, idx: number) => {
      if (idx === 0) {
        return React.cloneElement(child, { first: true })
      }
      return child
    }
  )

  return (
    <View style={[styles.cells, style]} {...others}>
       {renderCellsTitle(title)}
      <View style={[styles.cells]}>{childrenWithProps}</View>
    </View>
  )
}

// Cells.propTypes = {
//   children: PropTypes.node,
//   style: ViewPropTypes.style,
// }

export default Cells
