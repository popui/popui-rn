import React from "react";
import { Text, View, ViewStyle,StyleSheet,SafeAreaView } from "react-native";
import { Button, ButtonWeui, Progress, WhiteSpace } from "popui-rn";
const { Button, ButtonArea } = ButtonWeui;
const styles = StyleSheet.create({
  container:{
    marginTop: 30,
  },
  advanced:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

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
      <View style={styles.advanced}>
        <View style={{ marginRight: 10, height: 4, flex: 1 }}>
          <Progress percent={this.state.percent} />
        </View>
        <Text>{this.state.percent}%</Text>
      </View>
      <ButtonArea direction="horizontal">
        <Button onPress={this.onAdd10} >
          +10
          </Button>
        <Button type="primary" onPress={this.start} style={{ marginLeft: 10 }}>
          上传
          </Button>
        <Button onPress={this.stop} style={{ marginLeft: 10 }}>
          stop
          </Button>
      </ButtonArea>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>position="fixed"</Text>
        <Progress percent={90} position="fixed" />
        <WhiteSpace />

        {/* <Text>固定 percent</Text>
        <Progress percent={35} />
        <WhiteSpace />
        
        <WhiteSpace />
        {this.renderAdvanced()} */}
      </View>
    );
  }
}
