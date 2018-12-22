import React from 'react'

import { StyleProp, View, ViewStyle } from 'react-native'
import theme from '../style/themes/default'

import { GapVPropsType } from './PropsType'
export interface GapVProps extends GapVPropsType {
  style?: StyleProp<ViewStyle>
}

class GapV extends React.Component<GapVProps, any> {
  static defaultProps = {
    size: 'lg',
  }

  render() {
    const { size, style, children } = this.props
    const margin = theme[`h_spacing_${size}`]
    return (
      <View style={[{ marginLeft: margin, marginRight: margin }, style]}>
        {children}
      </View>
    )
  }
}

export default GapV
