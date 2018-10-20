import React from "react";

import { ButtonWeui, WingBlank, Toptips } from "popui-rn";
const {Button, ButtonArea } = ButtonWeui
export interface IProps {}

export default class TooltipsScreen extends React.Component<IProps, any> {
  static navigationOptions = {
    title: "Tooltips"
  };

  state = {
    toptipsVisible: false
  };

  render() {
    return (
      <WingBlank hasPadddingHorizontal hasPaddingTop>
        <ButtonArea>
          <Button type="primary" onPress={this.onToptipsShow}>
            Toptips
          </Button>
        </ButtonArea>
        <Toptips visible={this.state.toptipsVisible}>Test Toptips!</Toptips>
      </WingBlank>
    );
  }

  private onToptipsShow = () => {
    this.setState({ toptipsVisible: true });
    setTimeout(() => this.setState({ toptipsVisible: false }), 3000);
  };
}
