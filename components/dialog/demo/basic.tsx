/* tslint:disable:no-console */
import React from "react";
import { observer } from "mobx-react";
import { View, ScrollView } from "react-native";
import {
  Button,
  Modal,
  Dialog,
  GapH,
  GapV,
  DialogBodyText,
  ModalAlert,
  ModalOperation,
  ModalPrompt,
  ModalPopup
} from "popui-rn";

@observer
export default class BasicModalExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      visible1: false,
      visible2: false
    };
  }

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onClose1 = () => {
    this.setState({
      visible1: false
    });
  };

  onClose2 = () => {
    this.setState({
      visible2: false
    });
  };

  onAlert = () => {
    ModalAlert.alert({
      content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      actions: [
        { text: "知道了", onPress: () => console.log("ok") }
      ]
    });
  };
  onAlertWith2Actions= () => {
    ModalAlert.alert({
      title: "弹窗标题",
      content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      actions: [
        { text: "辅助操作", onPress: () => console.log("cancel")},
        { text: "主操作", onPress: () => console.log("ok") }
      ]
    });
  }
  onAlertLongText = () => {
    ModalAlert.alert({
      title: "弹窗标题",
      content: "超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本 123 abc\n超长文本\n超长文本超长文本超长文本超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本",
      actions: [
        { text: "警告", onPress: () => console.log("cancel"), type: "warn" },
        { text: "确认", onPress: () => console.log("ok") }
      ]
    });
  };

  onOpertation = () => {
    ModalOperation.operation({
      actions: [
        { text: "标为未读", onPress: () => console.log("标为未读被点击了") },
        { text: "置顶聊天", onPress: () => console.log("置顶聊天被点击了") },
        { text: "取消", onPress: () => console.log("取消") }
      ]
    });
  };

  onPromptLogin = () => {
    const callback = (login: any, password: any) =>
      console.log(`login: ${login}, password: ${password}`);
    ModalPrompt.prompt({
      title: "Login",
      content: "Pleas input login information",
      type: "login-password",
      placeholders: ["Please input name", "Please input password"],
      callbackOrActions: callback
    });
  };

  onPromptSecureText = () => {
    const callback = (password: any) => console.log(`password: ${password}`)
    ModalPrompt.prompt({
      title:"Input password",
      content: "password message",
      type: "secure-text",
      placeholders: "defaultValue",
      callbackOrActions: callback
    });
  };

  onPrompt = () => {
    const callback = (password: any) => console.log(`password: ${password}`);
    ModalPrompt.prompt({
      title:"default",
      content: "name message",
      type: "default",
      placeholders: ["please input name"],
      callbackOrActions: callback
    });
  };
  renderContent = (props: { onClose: Function; style?: any }) => {
    return (
      <View style={props.style}>
        <View style={{ paddingVertical: 20 }}>
          <DialogBodyText style={{ textAlign: "center" }}>
            Content...
          </DialogBodyText>
          <DialogBodyText style={{ textAlign: "center" }}>
            Content...
          </DialogBodyText>
        </View>
        <Button type="primary" inline onClick={props.onClose}>
          close modal
        </Button>
      </View>
    );
  };
  render() {
    const actionButtons = [
      { text: "Cancel", onPress: () => console.log("cancel") },
      { text: "Ok", onPress: () => console.log("ok") }
    ];
    return (
      <ScrollView style={{ marginTop: 20 }}>
        <GapV>
          <Button onClick={() => this.setState({ visible: true })}>
            showModal
          </Button>
          <GapH />
          <Button onClick={() => this.setState({ visible1: true })}>
            transparent:false
          </Button>
          <GapH />
          <Button onClick={() => this.setState({ visible2: true })}>
            popup
          </Button>
          <GapH />
          <Button onClick={this.onAlert}>alert </Button>
          <GapH />
          <Button onClick={this.onAlertWith2Actions}>alert 2个按钮 </Button>
          <GapH />
          <Button onClick={this.onAlertLongText}> alert 超长文本 </Button>
          <GapH />
          <Button onClick={this.onOpertation}>opertation</Button>
          <GapH />
          <Button onClick={this.onPrompt}>prompt (default)</Button>
          <GapH />
          <Button onClick={this.onPromptLogin}>
          prompt (login-password)
          </Button>
          <GapH />
          <Button onClick={this.onPromptSecureText}>
          prompt (secure-text)
          </Button>
        </GapV>

        <Modal
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
        >
          <Dialog
            title="Title"
            showCloseButton
            onClose={this.onClose}
            actions={actionButtons}
          >
            {this.renderContent({
              onClose: this.onClose
            })}
          </Dialog>
        </Modal>

        <Modal
          transparent={false}
          onClose={this.onClose1}
          visible={this.state.visible1}
        >
          <Dialog
            title="Title"
            showCloseButton
            onClose={this.onClose1}
            actions={actionButtons}
          >
            {this.renderContent({
              onClose: this.onClose1
            })}
          </Dialog>
        </Modal>

        <ModalPopup
          visible={this.state.visible2}
          onClose={this.onClose2}
        >
          {this.renderContent({
            onClose: this.onClose2
          })}
        </ModalPopup>
      </ScrollView>
    );
  }
}
