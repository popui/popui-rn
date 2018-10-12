import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import V from '../style/themes/weui'
import TouchableWithFallback from '../touchable-with-fallback'

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: V.CellGapH,
        paddingTop: V.CellGapV,
        paddingBottom: V.CellGapV,
        paddingRight: V.CellGapH,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.CellBorderColor,
    },
    firstCell: {
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

export interface CellProps {
  first?: boolean,
  access?: boolean,
  vcode?: boolean,
  error?: boolean,
  disabled?: boolean,
  children?: React.ReactNode,
  style?: ViewStyle
}

export interface CellState {
}

export default class CellComponent extends React.Component<CellProps, CellState> {

  public render() {
    const { access, vcode, error, first, disabled, children, style, ...others } = this.props
    const childrenWithProps = React.Children.map(children, (child:any) => {
      if (access && child.type.name === 'CellFooter') {
          return React.cloneElement(child, { access: true })
      }
      if (error && (child.type.name === 'CellHeader' || child.type.name === 'CellBody')) {
          return React.cloneElement(child, { error: true })
      }
      return child
  })

  return (
      <TouchableWithFallback underlayColor={V.BgColorActive} {...others} >
          <View
              style={[
                  styles.cell,
                  style,
                  first ? styles.firstCell : null,
                  vcode ? styles.vcodeCell : null,
                  disabled ? styles.disabledCell : null,
              ]}
          >{childrenWithProps}</View>
      </TouchableWithFallback>
  )
  }
}

