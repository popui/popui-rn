import React from 'react';
import { observer } from 'mobx-react'
import { TextStyle } from 'react-native';
import Modal from './Modal';
import modalStyle from './style/index';
import { ActionPropsType } from './PropsType';

export interface OperationContainerProps {
  actions: ActionPropsType<TextStyle>[];
  onAnimationEnd?: (visible: boolean) => void;
}

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
        style={modalStyle.operationContainer}
        bodyStyle={modalStyle.operationBody}
        footer={footer}
      />
    );
  }
}
