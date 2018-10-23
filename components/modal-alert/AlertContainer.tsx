/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { observer } from 'mobx-react'
import { ScrollView, Text, TextStyle } from 'react-native';
import Modal from '../modal';
import ModalBodyText from '../modal-body-text';

import { ActionPropsType } from '../modal/PropsType';
export interface AlertContainerProps {
  title: React.ReactNode;
  content: React.ReactNode;
  actions: ActionPropsType<TextStyle>[];
  onAnimationEnd?: (visible: boolean) => void;
}

@observer
export default class AlertContainer extends React.Component<
  AlertContainerProps,
  any
> {
  constructor(props: AlertContainerProps) {
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
    const { title, content, onAnimationEnd,actions } = this.props;
    const bodyStyle:any = {
      paddingTop: 8,
      alignItems: 'center',
    }
    if(!title){
      bodyStyle.marginTop = 23 // 15+8
    }
    return (
      <Modal
        transparent
        title={title}
        visible={this.state.visible}
        actions={actions}
        onClose={this.onClose}
        onAnimationEnd={onAnimationEnd}
        bodyStyle={bodyStyle}
      >
        <ScrollView>
          <ModalBodyText>{content}</ModalBodyText>
        </ScrollView>
      </Modal>
    );
  }
}
