/* tslint:disable:jsx-no-multiline-js */
import React from "react";

import { ScrollView, Text, TextStyle } from "react-native";
import Dialog from "../dialog";
import DialogBodyText from "../dialog-body-text";
import { ActionPropsType } from "../dialog/PropsType";
import RCModal from "../modal";

export interface AlertContainerProps {
  title: React.ReactNode;
  content: React.ReactNode;
  actions: ActionPropsType<TextStyle>[];
  onAnimationEnd?: (visible: boolean) => void;
}


export default class AlertContainer extends React.Component<
  AlertContainerProps,
  any
> {
  constructor(props: AlertContainerProps) {
    super(props);
    this.state = {
      visible: true
    };
  }

  onClose = () => {
    this.setState(
      {
        visible: false
      });
  };

  render() {
    const { title, content, onAnimationEnd, actions } = this.props;
    const bodyStyle: any = {
      paddingTop: 8,
      alignItems: "center"
    };
    if (!title) {
      bodyStyle.marginTop = 23; // 15+8
    }
    return (
      <RCModal
        visible={this.state.visible}
        animationType={"fade"}
        maskClosable={true}
        onClose={this.onClose}
        onAnimationEnd={onAnimationEnd}
      >
        <Dialog
          title={title}
          actions={actions}
          onClose={this.onClose}
          bodyStyle={bodyStyle}
        >
          <ScrollView>
            <DialogBodyText>{content}</DialogBodyText>
          </ScrollView>
        </Dialog>
      </RCModal>
    );
  }
}
