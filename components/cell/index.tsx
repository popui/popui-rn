import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import TouchableWithFallback from '../touchable-with-fallback'

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: themeVars.CellGapH,
    paddingTop: themeVars.CellGapV,
    paddingBottom: themeVars.CellGapV,
    paddingRight: themeVars.CellGapH,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: themeVars.CellBorderColor,
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

@observer
export default class Cell extends React.Component<CellProps, CellState> {
  private renderChildrenWithProps = () => {
    const { access, error, children} = this.props
    const childrenWithProps = React.Children.map(children, (child: any) => {
      if(!child){
        console.log('renderChildrenWithProps: child is invalid!',{
          child
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
  public render() {
    const { access, vcode, error, first, disabled, children, style, ...others } = this.props
    return (
      <TouchableWithFallback underlayColor={themeVars.BgColorActive} {...others} >
        <View
          style={[
            styles.cell,
            style,
            first ? styles.firstCell : null,
            vcode ? styles.vcodeCell : null,
            disabled ? styles.disabledCell : null,
          ]}
        >{this.renderChildrenWithProps()}</View>
      </TouchableWithFallback>
    )
  }
}

