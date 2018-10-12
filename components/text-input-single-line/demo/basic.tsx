/* tslint:disable:jsx-no-multiline-js */
import React from "react";
import {
  ScrollView,
  Text,
  TextInput as RNTextInput,
  Alert,
  Image
} from "react-native";
import {
  Button,
  TextInputSingleLine,
  List,
  CellLabel,
  Cell,
  CellBody,
  CellFooter,
  CellHeader,
  Cells,
  CellsTips,
  CellsTitle,
  CellText
} from "popui-rn";

declare var jest: any;

export default class BasicTextInputSingleLineExample extends React.Component<
  any,
  any
> {
  inputRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      labelnum1: "",
      labelnum2: "",
      labelnum3: "",
      text: "",
      bankCard: "",
      phone: "",
      password: "",
      number: ""
    };
  }
  onClearPress = () => {
    Alert.alert("Clear Pressed!");
  };
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#eee" }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Cells>
          <Cell>
            <CellHeader>
              <CellLabel>qq</CellLabel>
            </CellHeader>
            <CellBody>
              <RNTextInput placeholder="请输入 qq 号" value={"TEST"} />
            </CellBody>
          </Cell>
          <Cell vcode error>
            <CellHeader>
              <CellLabel>验证码</CellLabel>
            </CellHeader>
            <CellBody>
              <RNTextInput placeholder="请输入验证码" defaultValue="111" />
            </CellBody>
            <CellFooter>
              <Image source={{ uri: "https://weui.io/images/vcode.jpg" }} />
            </CellFooter>
          </Cell>
        </Cells>
        <List renderHeader={() => "基本"}>
          <TextInputSingleLine
            left="输入框"
            clear
            error={!this.state.value}
            onErrorPress={() => Alert.alert("clicked me")}
            onClearPress={this.onClearPress}
            value={this.state.value}
            onChangeText={(value: any) => {
              this.setState({
                value
              });
            }}
            extra="元"
            placeholder="有标签"
          />
          <TextInputSingleLine
            left="输入框"
            clear
            onErrorPress={() => {
              Alert.alert("can not edit");
            }}
            onClearPress={this.onClearPress}
            value="不可编辑"
            extra={"元"}
            placeholder="不可编辑"
            editable={false}
          />
          <TextInputSingleLine
            clear
            value={this.state.value1}
            onChangeText={(value: any) => {
              this.setState({
                value1: value
              });
            }}
            onClearPress={this.onClearPress}
            placeholder="无标签"
          />
          <TextInputSingleLine
            left="标题"
            defaultValue="xx"
            clear
            placeholder="自动获取光标"
            onClearPress={this.onClearPress}
            autoFocus={
              /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===
              "undefined"
            }
          />
          <TextInputSingleLine
            left="标题"
            clear
            onClearPress={this.onClearPress}
            placeholder="点击下方按钮该输入框会获取光标"
            ref={(el: any) => (this.inputRef = el)}
          />
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
        <List renderHeader={() => "固定标签字数"}>
          <TextInputSingleLine
            left="姓名"
            clear
            onClearPress={this.onClearPress}
            value={this.state.labelnum1}
            onChangeText={(value: any) => {
              this.setState({
                labelnum1: value
              });
            }}
            labelNumber={2}
            placeholder="两个字标签"
          />
          <TextInputSingleLine
            left="校验码"
            clear
            onClearPress={this.onClearPress}
            value={this.state.labelnum2}
            onChangeText={(value: any) => {
              this.setState({
                labelnum2: value
              });
            }}
            labelNumber={3}
            placeholder="三个字标签"
          />
          <TextInputSingleLine
            left="四字标签"
            clear
            onClearPress={this.onClearPress}
            value={this.state.labelnum3}
            onChangeText={(value: any) => {
              this.setState({
                labelnum3: value
              });
            }}
            labelNumber={4}
            placeholder="四个字标签（默认）"
          />
        </List>
        <List renderHeader={() => "格式"}>
          <TextInputSingleLine
            left="文本输入"
            clear
            onClearPress={this.onClearPress}
            error
            value={this.state.text}
            onChangeText={(value: any) => {
              this.setState({
                text: value
              });
            }}
            placeholder="text"
          />
          <TextInputSingleLine
            left="银行卡"
            clear
            onClearPress={this.onClearPress}
            type="bankCard"
            value={this.state.bankcard}
            onChangeText={(value: any) => {
              this.setState({
                bankcard: value
              });
            }}
            placeholder="bankCard"
          />
          <TextInputSingleLine
            left="手机号"
            clear
            onClearPress={this.onClearPress}
            type="phone"
            value={this.state.phone}
            onChangeText={(value: any) => {
              this.setState({
                phone: value
              });
            }}
            placeholder="phone"
          />
          <TextInputSingleLine
            left="密码"
            clear
            onClearPress={this.onClearPress}
            type="password"
            value={this.state.password}
            onChangeText={(value: any) => {
              this.setState({
                password: value
              });
            }}
            placeholder="password"
          />
          <TextInputSingleLine
            left="数字"
            clear
            onClearPress={this.onClearPress}
            type="number"
            value={this.state.number}
            onChangeText={(value: any) => {
              this.setState({
                number: value
              });
            }}
            placeholder="number"
          />
        </List>
      </ScrollView>
    );
  }
}
