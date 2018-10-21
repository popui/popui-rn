import React from "react";
import { observer } from 'mobx-react';
import { Text, View,StyleSheet,SafeAreaView } from "react-native";
import {  WeuiButton as Button,WeuiButtonArea, Progress, GapH } from "popui-rn";

const styles = StyleSheet.create({
  container:{
    paddingTop:15
  },
  advancedProgressRow:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

@observer
export default class BasicProgressExample extends React.Component<any, any> {
  timer: any;
  isUploading = false;

  constructor(props: any) {
    super(props);
    this.state = {
      percent: 40,
      value: 0
    };
  }

  onAdd10 = () => {
    let p = this.state.percent + 10;
    if (this.state.percent >= 100) {
      p = 0;
    }
    this.setState({ percent: p });
  };
  start = () => {
    if (this.isUploading) {
      return;
    }
    this.isUploading = true;
    this.upload();
  };
  stop = () => {
    if (!this.isUploading) {
      return;
    }
    this.isUploading = false;
    clearTimeout(this.timer)
  }
  upload = () => {
    if (!this.isUploading) {
      return;
    }
    const percent = (this.state.percent + 1) % 100;
    this.setState({
      percent
    });
    this.timer = setTimeout(this.upload, 20);
  };
  renderAdvanced = () => {
    return <View>
      <Text>受控 percent </Text>
      <View style={styles.advancedProgressRow}>
          <Progress percent={this.state.percent} style={{ marginRight: 10, height: 4, flex: 1 }}/>
        <Text>{this.state.percent}%</Text>
      </View>
      <WeuiButtonArea direction="horizontal" >
        <Button onPress={this.onAdd10} >
          +10
          </Button>
        <Button type="primary" onPress={this.start} style={{ marginLeft: 10 }}>
          上传
          </Button>
        <Button onPress={this.stop} style={{ marginLeft: 10 }}>
          stop
          </Button>
      </WeuiButtonArea>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{"最上方 percent={80} position=\"fixed\""}</Text>
        <Progress percent={80} position="fixed" />
        <GapH size="xl"/>

        <Text>{"固定 percent={35} unfilled={false}"}</Text>
        <Progress percent={35} unfilled={false}/>
        <GapH size="xl"/>

        {this.renderAdvanced()}
      </View>
    );
  }
}
