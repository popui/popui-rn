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
    const footer = actions.map(button => {
      // tslint:disable-next-line:only-arrow-functions
      const orginPress = button.onPress || function() {};
      button.onPress = () => {
        const res = orginPress();
        if (res && (res as any).then) {
          (res as any).then(() => {
            this.onClose();
          });
        } else {
          this.onClose();
        }
      };
      return button;
    });
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
        footer={footer}
      />
    );
  }
}
