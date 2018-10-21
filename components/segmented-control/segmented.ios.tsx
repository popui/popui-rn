import React from 'react';
import { observer } from 'mobx-react'
import { SegmentedControlIOS, StyleProp, ViewStyle } from 'react-native';
import { SegmentedControlPropsType } from './PropsType';

export interface SegmentedControlProps extends SegmentedControlPropsType {
  styles?: any;
  style?: StyleProp<ViewStyle>;
}

@observer
export default class SegmentedControl extends React.Component<
  SegmentedControlProps,
  any
> {
  static defaultProps = {
    tintColor: '#108ee9',
    selectedIndex: 0,
  };

  render() {
    const { tintColor, disabled, selectedIndex, ...restProps } = this.props;

    return (
      <SegmentedControlIOS
        tintColor={tintColor}
        selectedIndex={selectedIndex}
        {...restProps}
        enabled={!disabled}
      />
    );
  }
}
