import React from 'react';
import { observer } from 'mobx-react'
import { StyleProp, View, ViewStyle } from 'react-native';
import {themeStore} from '../theme-store';
const { themeVars } = themeStore;

import { GapVPropsType } from './PropsType';
export interface GapVProps extends GapVPropsType {
  style?: StyleProp<ViewStyle>;
}
@observer
class GapV extends React.Component<GapVProps, any> {
  static defaultProps = {
    size: 'lg',
  };

  render() {
    const { size, style, children } = this.props;
    const margin = themeVars[`h_spacing_${size}`];
    return (
      <View style={[{ marginLeft: margin, marginRight: margin }, style]}>
        {children}
      </View>
    );
  }
}

export default GapV;
