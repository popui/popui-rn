/* tslint:disable:jsx-no-multiline-js */
import React from "react";
import { ScrollView, Alert } from "react-native";
import {
  TextInputWithType,
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
  renderText = () => {
    return (
      <Cell>
        <CellHeader>
          <CellLabel>文本输入</CellLabel>
        </CellHeader>
        <CellBody>
          <TextInputWithType
            value={this.state.text}
            clear
            onClearPress={this.onClearPress}
            placeholder="default (text)"
            onChangeText={(value: any) => {
              this.setState({
                text: value
              });
            }}
          />
        </CellBody>
        <CellFooter />
      </Cell>
    );
  };
  renderBankCard = () => {
    return (
      <Cell access>
        <CellHeader>
          <CellLabel>银行卡</CellLabel>
        </CellHeader>
        <CellBody>
          <TextInputWithType
            type="bankCard"
            value={this.state.bankCard}
            clear
            onClearPress={this.onClearPress}
            placeholder="bankCard"
            onChangeText={(value: any) => {
              this.setState({
                bankCard: value
              });
            }}
          />
        </CellBody>
        <CellFooter />
      </Cell>
    );
  };
  renderPhone = () => {
    return (
      <Cell>
        <CellHeader>
          <CellLabel>手机号</CellLabel>
        </CellHeader>
        <CellBody>
          <TextInputWithType
            type="phone"
            value={this.state.phone}
            clear
            onClearPress={this.onClearPress}
            placeholder="phone"
            onChangeText={(value: any) => {
              this.setState({
                phone: value
              });
            }}
          />
        </CellBody>
        <CellFooter />
      </Cell>
    );
  };
  renderPassword = () => {
    return (
      <Cell>
        <CellHeader>
          <CellLabel>密码</CellLabel>
        </CellHeader>
        <CellBody>
          <TextInputWithType
            type="password"
            value={this.state.password}
            clear
            onClearPress={this.onClearPress}
            placeholder="password"
            onChangeText={(value: any) => {
              this.setState({
                password: value
              });
            }}
          />
        </CellBody>
        <CellFooter />
      </Cell>
    );
  };
  renderNumber = () => {
    return (
      <Cell access error>
        <CellHeader>
          <CellLabel>数字</CellLabel>
        </CellHeader>
        <CellBody>
          <TextInputWithType
            type="number"
            value={this.state.number}
            clear
            onClearPress={this.onClearPress}
            placeholder="number"
            onChangeText={(value: any) => {
              this.setState({
                number: value
              });
            }}
          />
          <CellText style={{ marginLeft: 5 }}>元</CellText>
        </CellBody>
        <CellFooter />
      </Cell>
    );
  };
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#eee" }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CellsTitle>TextInput With Type</CellsTitle>
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
