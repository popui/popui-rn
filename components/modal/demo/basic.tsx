/* tslint:disable:no-console */
import React from "react";
import { observer } from "mobx-react";
import { View, ScrollView } from "react-native";
import {
  Button,
  Modal,
  GapH,
  GapV,
  ModalBodyText,
  ModalAlert,
  ModalOperation,
  ModalPrompt
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
  onAlert1 = () => {
    ModalAlert.alert({
      title: "弹窗标题",
      content: "超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本 123 abc\n超长文本\n超长文本超长文本超长文本超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本\n超长文本",
      actions: [
        { text: "辅助操作", onPress: () => console.log("cancel"), type: "warn" },
        { text: "主操作", onPress: () => console.log("ok") }
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
          <ModalBodyText style={{ textAlign: "center" }}>
            Content...
          </ModalBodyText>
          <ModalBodyText style={{ textAlign: "center" }}>
            Content...
          </ModalBodyText>
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
          <Button onClick={this.onAlert1}>alert 2个按钮 </Button>
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
          title="Title"
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
          closable
          actions={actionButtons}
        >
          {this.renderContent({
            onClose: this.onClose
          })}
        </Modal>

        <Modal
          transparent={false}
          visible={this.state.visible1}
          animationType="slide-up"
          onClose={this.onClose1}
        >
          {this.renderContent({
            style: {
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: 100
            },
            onClose: this.onClose1
          })}
        </Modal>

        <Modal
          popup
          visible={this.state.visible2}
          animationType="slide-up"
          onClose={this.onClose2}
        >
          {this.renderContent({
            onClose: this.onClose2
          })}
        </Modal>
      </ScrollView>
    );
  }
}
