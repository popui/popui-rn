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
  TextInput,
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

export default class BasicTextInputExample extends React.Component<any, any> {
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
        <CellsTitle >基本</CellsTitle>
        <Cells>
          <Cell access error>
            <CellHeader>
              <CellLabel>qq1</CellLabel>
            </CellHeader>
            <CellBody>
              <TextInput
                clear
                onErrorPress={() => Alert.alert("clicked me")}
                onClearPress={this.onClearPress}
                value={this.state.value}
                onChangeText={(value: any) => {
                  this.setState({
                    value
                  });
                }}
                placeholder="有标签"
              />
              <CellText>元</CellText>
            </CellBody>
            <CellFooter />
          </Cell>
          <Cell access error>
            <CellHeader>
              <CellLabel>qq2</CellLabel>
            </CellHeader>
            <CellBody>
              <TextInput
                clear
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
            </CellBody>
            <CellFooter />
          </Cell>
          <Cell vcode error>
            <CellHeader>
              <CellLabel>验证码</CellLabel>
            </CellHeader>
            <CellBody>
              <TextInput
                clear
                onErrorPress={() => Alert.alert("clicked me")}
                onClearPress={this.onClearPress}
                value={this.state.value}
                onChangeText={(value: any) => {
                  this.setState({
                    value
                  });
                }}
                extra="元"
                placeholder="请输入验证码"
              />
            </CellBody>
            <CellFooter>
              <Image source={{ uri: "https://weui.io/images/vcode.jpg" }} />
            </CellFooter>
          </Cell>

          <Cell>
            <CellHeader>
              <CellLabel>自动获取光标</CellLabel>
            </CellHeader>
            <CellBody>
              <TextInput
                defaultValue="xx"
                clear
                placeholder="自动获取光标"
                onClearPress={this.onClearPress}
                autoFocus={
                  /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===
                  "undefined"
                }
              />
            </CellBody>
          </Cell>

          <Cell>
            <CellHeader>
              <CellLabel>点击获取光标</CellLabel>
            </CellHeader>
            <CellBody>
              <TextInput
                clear
                onClearPress={this.onClearPress}
                placeholder="点击下方按钮该输入框会获取光标"
                ref={(el: any) => (this.inputRef = el)}
              />
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              <Button
                onClick={() => {
                  this.inputRef.focus();
                }}
                type="primary"
              >
                点击获取光标
              </Button>
            </CellBody>
          </Cell>
        </Cells>
      </ScrollView>
    );
  }
}
