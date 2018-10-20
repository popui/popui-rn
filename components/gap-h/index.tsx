import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import variables from '../style/themes/default';
import { GapHPropsType } from './PropsType';
export interface GapHProps extends GapHPropsType {
  style?: StyleProp<ViewStyle>;
}
class GapH extends React.Component<GapHProps, any> {
  static defaultProps = {
    size: 'md',
  };

  render() {
    const { size, style } = this.props;
    return (
      <View
        style={[{ height: (variables as any)[`v_spacing_${size}`] }, style]}
      />
    );
  }
}

export default GapH;
