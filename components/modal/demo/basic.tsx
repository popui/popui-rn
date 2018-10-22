/* tslint:disable:no-console */
import React from 'react';
import { observer } from 'mobx-react'
import {  View, ScrollView } from 'react-native';
import { Button, Modal, GapH, GapV,ModalBodyText,ModalAlert,ModalOperation,ModalPrompt } from 'popui-rn';

@observer
export default class BasicModalExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      visible1: false,
      visible2: false,
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  onClose1 = () => {
    this.setState({
      visible1: false,
    });
  }

  onClose2 = () => {
    this.setState({
      visible2: false,
    });
  }

  onAlert = () => {
    ModalAlert.alert({
      title:'标题一',
      content:'警告内容',
      actions:[
        { text: 'Cancel', onPress: () => console.log('cancel'),type:'warn' },
        { text: 'OK', onPress: () => console.log('ok') },
      ]
    });
  }

  onOpertation = () => {
    ModalOperation.operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
    ]);
  }

  onPromptLogin = () => {
    ModalPrompt.prompt(
      'Login',
      'Pleas input login information',
      (login: any, password: any) =>
        console.log(`login: ${login}, password: ${password}`),
      'login-password',
      null,
      ['Please input name', 'Please input password'],
    );
  }

  onPromptSecureText = () => {
    Modal.prompt(
      'Input password',
      'password message',
      (password: any) => console.log(`password: ${password}`),
      'secure-text',
      'defaultValue',
    );
  }

  onPrompt = () => {
    Modal.prompt(
      'Name',
      'name message',
      (password: any) => console.log(`password: ${password}`),
      'default',
      null,
      ['please input name'],
    );
  }
  renderContent =(props:{
    onClose:Function,style?:any
  }) =>{
    return (
      <View style={props.style}>
        <View style={{ paddingVertical: 20 }}>
            <ModalBodyText style={{ textAlign: 'center' }}>Content...</ModalBodyText>
            <ModalBodyText style={{ textAlign: 'center' }}>Content...</ModalBodyText>
          </View>
          <Button type="primary" inline onClick={props.onClose}>
            close modal
          </Button>
      </View>
    )
  }
  render() {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') },
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
          <Button onClick={this.onAlert}>Modal.alert</Button>
          <GapH />
          <Button onClick={this.onOpertation}>Modal.opertation</Button>
          <GapH />
          <Button onClick={this.onPrompt}>Modal.prompt (default)</Button>
          <GapH />
          <Button onClick={this.onPromptLogin}>
            Modal.prompt (login-password)
          </Button>
          <GapH />
          <Button onClick={this.onPromptSecureText}>
            Modal.prompt (secure-text)
          </Button>
        </GapV>

        <Modal
          title="Title"
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
          closable
          footer={footerButtons}
        >
          {this.renderContent({
            onClose:this.onClose
          })}
        </Modal>

        <Modal
          transparent={false}
          visible={this.state.visible1}
          animationType="slide-up"
          onClose={this.onClose1}
        >
          {this.renderContent({
            style:{
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop:100,
            },
            onClose:this.onClose1
          })}
        </Modal>


        <Modal
          popup
          visible={this.state.visible2}
          animationType="slide-up"
          onClose={this.onClose2}
        >
         {this.renderContent({
            onClose:this.onClose2
          })}
        </Modal>
      </ScrollView>
    );
  }
}
