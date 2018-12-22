import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import theme from '../style/themes/default'
import TouchableWithFallback from '../touchable-with-fallback'
import { CellProps, CellContentProps } from './PropsType'
import renderElement from '../_util/slot'

const styles = StyleSheet.create({
  container: {
    paddingLeft: theme.CellGapH,
  },
  cell: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: theme.CellGapH,
    paddingTop: theme.CellGapV,
    paddingBottom: theme.CellGapV,
    paddingRight: theme.CellGapH,
    borderTopWidth: StyleSheet.hairlineWidth, // 每个 Cell 都有 borderTop
    borderColor: theme.CellBorderColor,
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
      underlayColor={theme.BgColorActive}
      {...others}
    >
      <View style={[styles.container, style]}>
        <View
          style={[
            styles.cell,
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
      </View>
    </TouchableWithFallback>
  )
}
export default Cell
