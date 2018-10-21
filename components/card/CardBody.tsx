import React from 'react';
import { observer } from 'mobx-react'
import { StyleProp, View, ViewStyle } from 'react-native';

export interface CardBodyProps {
  styles?: any;
  style?: StyleProp<ViewStyle>;
}

@observer
export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style, styles, ...restProps } = this.props;
    return <View style={[styles.body, style]} {...restProps} />;
  }
}
