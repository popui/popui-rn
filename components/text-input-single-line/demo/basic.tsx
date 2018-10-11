/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { ScrollView, Text, Alert } from 'react-native';
import { Button, TextInputSingleLine, List } from 'popui-rn';

declare var jest: any;

export default class BasicTextInputSingleLineExample extends React.Component<any, any> {
  inputRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      labelnum1: '',
      labelnum2: '',
      labelnum3: '',
      text: '',
      bankCard: '',
      phone: '',
      password: '',
      number: '',
    };
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#eee' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => '基本'}>
          <TextInputSingleLine
            left="输入框"
            clear
            error={!this.state.value}
            onErrorPress={() => Alert.alert('clicked me')}
            value={this.state.value}
            onChangeText={(value: any) => {
              this.setState({
                value,
              });
            }}
            extra="元"
            placeholder="有标签"
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="输入框"
            clear
            onErrorPress={() => {
              Alert.alert("can not edit");
            }}
            value="不可编辑"
            onChangeText={(value: any) => {
              this.setState({
                value,
              });
            }}
            extra={<Text>元</Text>}
            placeholder="不可编辑"
            editable={false}
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            clear
            value={this.state.value1}
            onChangeText={(value: any) => {
              this.setState({
                value1: value,
              });
            }}
            placeholder="无标签"
          />
          <TextInputSingleLine
            left="标题"
            defaultValue="xx"
            clear
            placeholder="自动获取光标"
            autoFocus={
              /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===
              'undefined'
            }
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="标题"
            clear
            placeholder="点击下方按钮该输入框会获取光标"
            ref={(el: any) => (this.inputRef = el)}
          >

          </TextInputSingleLine>
          <List.Item>
            <Button
              onClick={() => {
                this.inputRef.focus();
              }}
              type="primary"
            >
              点击获取光标
            </Button>
          </List.Item>
        </List>
        <List renderHeader={() => '固定标签字数'}>
          <TextInputSingleLine
            left="姓名"
            clear
            value={this.state.labelnum1}
            onChangeText={(value: any) => {
              this.setState({
                labelnum1: value,
              });
            }}
            labelNumber={2}
            placeholder="两个字标签"
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="校验码"
            clear
            value={this.state.labelnum2}
            onChangeText={(value: any) => {
              this.setState({
                labelnum2: value,
              });
            }}
            labelNumber={3}
            placeholder="三个字标签"
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="四字标签"
            clear
            value={this.state.labelnum3}
            onChangeText={(value: any) => {
              this.setState({
                labelnum3: value,
              });
            }}
            labelNumber={4}
            placeholder="四个字标签（默认）"
          >

          </TextInputSingleLine>
        </List>
        <List renderHeader={() => '格式'}>
          <TextInputSingleLine
            left="文本输入"
            clear
            error
            value={this.state.text}
            onChangeText={(value: any) => {
              this.setState({
                text: value,
              });
            }}
            placeholder="text"
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="银行卡"
            clear
            type="bankCard"
            value={this.state.bankcard}
            onChangeText={(value: any) => {
              this.setState({
                bankcard: value,
              });
            }}
            placeholder="bankCard"
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="手机号"
            clear
            type="phone"
            value={this.state.phone}
            onChangeText={(value: any) => {
              this.setState({
                phone: value,
              });
            }}
            placeholder="phone"
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="密码"
            clear
            type="password"
            value={this.state.password}
            onChangeText={(value: any) => {
              this.setState({
                password: value,
              });
            }}
            placeholder="password"
          >

          </TextInputSingleLine>
          <TextInputSingleLine
            left="数字"
            clear
            type="number"
            value={this.state.number}
            onChangeText={(value: any) => {
              this.setState({
                number: value,
              });
            }}
            placeholder="number"
          >

          </TextInputSingleLine>
        </List>
      </ScrollView>
    );
  }
}
