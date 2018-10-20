import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import variables from '../style/themes/default';
import { WhiteSpacePropsType } from './PropsType';
export interface WhiteSpaceProps extends WhiteSpacePropsType {
  style?: StyleProp<ViewStyle>;
}
class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
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

export default WhiteSpace;
