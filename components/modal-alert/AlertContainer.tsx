/* tslint:disable:jsx-no-multiline-js */
import React from "react";
import { observer } from "mobx-react";
import { ScrollView, Text, TextStyle, Modal } from "react-native";
import Dialog from "../dialog";
import DialogBodyText from "../dialog-body-text";
import Mask from "../mask";
import { ActionPropsType } from "../dialog/PropsType";
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
      visible: true
    };
  }

  onClose = () => {
    const { onAnimationEnd} = this.props
    this.setState({
      visible: false
    },()=>{
      if(onAnimationEnd){
        onAnimationEnd(false)
      }
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
      <Modal
        transparent
        visible={this.state.visible}
        animationType={"fade"}
        onRequestClose={this.onClose}
      >
        <Mask
          transparent
          onPress={this.onClose}
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
        </Mask>
      </Modal>
    );
  }
}
