import React from "react";

import {  WeuiButton as Button,WeuiButtonArea, View, Toptips } from "popui-rn";

export interface IProps {}

@observer
export default class TooltipsScreen extends React.Component<IProps, any> {
  static navigationOptions = {
    title: "Tooltips"
  };

  state = {
    toptipsVisible: false
  };

  render() {
    return (
      <View style={{marginTop: 50,}}>
        <WeuiButtonArea>
          <Button type="primary" onPress={this.onToptipsShow}>
            Toptips
          </Button>
        </WeuiButtonArea>
        <Toptips visible={this.state.toptipsVisible}>Test Toptips!</Toptips>
      </View>
    );
  }

  private onToptipsShow = () => {
    this.setState({ toptipsVisible: true });
    setTimeout(() => this.setState({ toptipsVisible: false }), 3000);
  };
}
