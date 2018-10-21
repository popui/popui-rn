/* tslint:disable:jsx-no-multiline-js */
import React from "react";
import { observer } from 'mobx-react';
import {
  ScrollView,
  TextInput as RNTextInput,
  Alert,
} from "react-native";
import {
  TextInput,
  TextInputTypeProvider,
  CellLabel,
  Cell,
  CellBody,
  CellFooter,
  CellHeader,
  Cells,
  CellsTitle,
  CellText
} from "popui-rn";

declare var jest: any;

@observer
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
      text: "text",
      bankCard: "11112222333344445555",
      phone: "18866660000",
      password: "abcd1234",
      number: "1234567890"
    };
  }
  onClearPress = () => {
    Alert.alert("Clear Pressed!");
  };
  renderText=()=>{
    return (<Cell>
      <CellHeader>
        <CellLabel>文本输入</CellLabel>
      </CellHeader>
      <CellBody>
        <TextInputTypeProvider
          value={this.state.text}
        >
          {(props: any) => <TextInput
            {...props}
            clear
            onClearPress={this.onClearPress}
            placeholder="default (text)"
            onChangeText={(value: any) => {
              this.setState({
                text:value
              });
            }}
          />}
        </TextInputTypeProvider>
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  renderBankCard=()=>{
    return (<Cell access>
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
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  renderPhone=()=>{
    return (<Cell>
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
      </CellBody>
      <CellFooter />
    </Cell>)
  }
  renderPassword=()=>{
    return (<Cell>
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
        <CellText style={{marginLeft: 5,}}>元</CellText>
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
        <CellsTitle >TextInputTypeProvider</CellsTitle>
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
