// tslint:disable:jsx-no-multiline-js
import React from "react";
import { Image, ScrollView, Text, Alert } from "react-native";
import { Result, ButtonWeui, Flex } from "popui-rn";

export default class ResultExample extends React.Component<any, any> {
  renderButtons = () => {
    return (
      <Flex direction="row" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Flex.Item>
          <ButtonWeui.Button
            onPress={() => {
              Alert.alert("cancel");
            }}
            style={{
              marginRight: 15
            }}
          >
            Cancel
          </ButtonWeui.Button>
        </Flex.Item>

        <Flex.Item>
          <ButtonWeui.Button
            type="primary"
            onPress={() => {
              Alert.alert("ok");
            }}
          >
            OK
          </ButtonWeui.Button>
        </Flex.Item>
      </Flex>
    );
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#F5F5F9", flex: 1 }}>
        <Text style={{ margin: 10, color: "#999" }}>iconName success</Text>
        <Result
          iconName="success"
          title="验证成功"
          message="所提交内容已成功完成验证"
          renderButtons={this.renderButtons}
        />

        <Text style={{ margin: 10, color: "#999" }}>iconName info</Text>
        <Result
          iconName="info"
          title="Info"
          message="所提交内容已成功完成验证"
          extra="extra 所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: "#999" }}>iconName warn</Text>
        <Result
          iconName="warn"
          title="Warn"
          message="所提交内容已成功完成验证"
          extra="extra 所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: "#999" }}>iconName cancel</Text>
        <Result
          iconName="cancel"
          title="Error"
          message="所提交内容已成功完成验证"
          extra="extra 所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: "#999" }}>URI 图片</Text>
        <Result
          imgUrl={{
            uri:
              "https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png"
          }}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: "#999" }}>Image source</Text>
        <Result
          imgUrl={require("./alipay.png")}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: "#999" }}>Image element</Text>
        <Result
          icon={
            <Image
              source={require("./alipay.png")}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message={<Text>所提交内容已成功完成验证</Text>}
        />

        <Text style={{ margin: 10, color: "#999" }}>含 button 操作</Text>
        <Result
          icon={
            <Image
              source={require("./alipay.png")}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message="所提交内容已成功完成验证"
          renderButtons={this.renderButtons}
        />
      </ScrollView>
    );
  }
}
