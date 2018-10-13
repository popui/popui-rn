/* tslint:disable:jsx-no-multiline-js */
import React from "react";
import {
  ScrollView,
  Text,
  TextInput as RNTextInput,
  Alert,
  Image,
  TextInput
} from "react-native";
import {
  Button,
  TextInputTypeProvider,
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

export default class BasicTextInputTypeProviderExample extends React.Component<
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
  renderText=()=>{
    return (<Cell access error>
      <CellHeader>
        <CellLabel>文本输入</CellLabel>
      </CellHeader>
      <CellBody>
        <TextInputTypeProvider
          value={this.state.value}
        >
          {(props: any) => <TextInput
            {...props}
            clear
            onClearPress={this.onClearPress}
            placeholder="default (text)"
            onChangeText={(value: any) => {
              this.setState({
                value
              });
            }}
          />}
        </TextInputTypeProvider>
        <CellText>元</CellText>
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  renderBankCard=()=>{
    return (<Cell access error>
      <CellHeader>
        <CellLabel>银行卡</CellLabel>
      </CellHeader>
      <CellBody>
        <TextInputTypeProvider
          type="bankCard"
          value={this.state.bankCard}
        >
          {(props: any) => <TextInput
            {...props}
            clear
            onClearPress={this.onClearPress}
            placeholder="bankCard"
            onChangeText={(value: any) => {
              this.setState({
                bankCard:value
              });
            }}
          />}
        </TextInputTypeProvider>
        <CellText>元</CellText>
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  renderPhone=()=>{
    return (<Cell access error>
      <CellHeader>
        <CellLabel>手机号</CellLabel>
      </CellHeader>
      <CellBody>
        <TextInputTypeProvider
          type="phone"
          value={this.state.phone}
        >
          {(props: any) => <TextInput
            {...props}
            clear
            onClearPress={this.onClearPress}
            placeholder="phone"
            onChangeText={(value: any) => {
              this.setState({
                phone:value
              });
            }}
          />}
        </TextInputTypeProvider>
        <CellText>元</CellText>
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  renderPassword=()=>{
    return (<Cell access error>
      <CellHeader>
        <CellLabel>密码</CellLabel>
      </CellHeader>
      <CellBody>
        <TextInputTypeProvider
          type="password"
          value={this.state.password}
        >
          {(props: any) => <TextInput
            {...props}
            clear
            onClearPress={this.onClearPress}
            placeholder="password"
            onChangeText={(value: any) => {
              this.setState({
                password:value
              });
            }}
          />}
        </TextInputTypeProvider>
        <CellText>元</CellText>
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  renderNumber=()=>{
    return (<Cell access error>
      <CellHeader>
        <CellLabel>数字</CellLabel>
      </CellHeader>
      <CellBody>
        <TextInputTypeProvider
          type="number"
          value={this.state.number}
        >
          {(props: any) => <TextInput
            {...props}
            clear
            onClearPress={this.onClearPress}
            placeholder="number"
            onChangeText={(value: any) => {
              this.setState({
                number:value
              });
            }}
          />}
        </TextInputTypeProvider>
        <CellText>元</CellText>
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#eee" }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Cells>
          {this.renderText()}
          {this.renderBankCard()}
          {this.renderPhone()}
          {this.renderPassword()}
          {this.renderNumber()}
        </Cells>
      </ScrollView>
    );
  }
}
