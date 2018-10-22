import React from 'react';
import { observer } from 'mobx-react'
import { StyleSheet} from 'react-native';
import Modal from '../modal';
import operationStyle from './style/index';
import {OperationContainerProps} from './PropsType';

const operationStyles = StyleSheet.create<any>(operationStyle);

@observer
export default class OperationContainer extends React.Component<
  OperationContainerProps,
  any
> {
  constructor(props: OperationContainerProps) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { actions, onAnimationEnd } = this.props;
    return (
      <Modal
        operation
        transparent
        maskClosable
        visible={this.state.visible}
        onClose={this.onClose}
        onAnimationEnd={onAnimationEnd}
        style={operationStyles.operationContainer}
        bodyStyle={operationStyles.operationBody}
        footer={actions}
      />
    );
  }
}
