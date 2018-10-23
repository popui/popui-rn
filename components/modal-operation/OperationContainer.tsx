import React from 'react';
import { observer } from 'mobx-react'
import { StyleSheet} from 'react-native';
import operationStyle from './style/index';
import {OperationContainerProps} from './PropsType';
import RCModal from "../modal";
import Dialog from "../dialog";

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
      <RCModal
        visible={this.state.visible}
        animationType={"fade"}
        maskClosable={true}
        onClose={this.onClose}
        onAnimationEnd={onAnimationEnd}
      >
        <Dialog
          actionsDirection={"vertical"}
          actions={actions}
          onClose={this.onClose}
          style={operationStyles.operationContainer}
          bodyStyle={operationStyles.operationBody}
        >
        </Dialog>
      </RCModal>
    );
  }
}
