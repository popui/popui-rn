import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import themeVars from '../style/themes/default'
import TouchableWithFallback from '../touchable-with-fallback'
import { CellProps, CellContentProps } from './PropsType'
import renderElement from '../_util/slot';

const styles = StyleSheet.create({
  cell: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: themeVars.CellGapH, // 以避免左边出现 border
    paddingTop: themeVars.CellGapV,
    paddingBottom: themeVars.CellGapV,
    paddingRight: themeVars.CellGapH,
    borderTopWidth: StyleSheet.hairlineWidth,// 每个 Cell 都有 borderTop
    borderColor: themeVars.CellBorderColor,
  },
  isFirstCell: {
    borderTopWidth: 0,
  },
  vcodeCell: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  disabledCell: {
    opacity: 0.5,
  },
})

export interface CellState {}

function CellItemContentRow(props: CellContentProps) {
  const { access, error, children } = props
  const childrenWithProps = React.Children.map(children, (child: any) => {
    if (!child) {
      console.log('renderChildrenWithProps: child is invalid!', {
        child,
      })
      return child
    }
    if (child.type.name === 'CellFooter') {
      if (access || error) {
        return React.cloneElement(child, { access, error })
      }
      return child
    }
    if (child.type.name === 'CellHeader' || child.type.name === 'CellBody') {
      if (error) {
        return React.cloneElement(child, { error })
      }
      return child
    }
    return child
  })
  return childrenWithProps
}

function Cell(props: CellProps) {
  const {
    access,
    vcode,
    error,
    isFirst,
    disabled,
    children,
    header,
    body,
    footer,
    style,
    ...others
  } = props

  return (
    <TouchableWithFallback
      disabled={disabled}
      underlayColor={themeVars.BgColorActive}
      {...others}
    >
      <View
        style={[
          styles.cell,
          style,
          isFirst ? styles.isFirstCell : null,
          vcode ? styles.vcodeCell : null,
          disabled ? styles.disabledCell : null,
        ]}
      >
        {CellItemContentRow({
          access,
          error,
          children,
        })}
        {renderElement(header)}
        {renderElement(body)}
        {renderElement(footer)}
      </View>
    </TouchableWithFallback>
  )
}
export default Cell
