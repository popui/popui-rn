import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { List, Picker } from "@popui/popui-rn";

import { district } from 'antd-mobile-demo-data';

const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onClick}>
    <View
      style={{ height: 36, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }}
    >
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</Text>
    </View>
  </TouchableOpacity>
);


export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
      loading:false
    };
  }
  onClick = () => {
    // console.log('start loading data');
    this.setState({
      loading:true
    })
    setTimeout(() => {
      this.setState({
        data: district,
        loading:false
      });
    }, 3000);
  }
  onChange = (value: any) => {
    // console.log(value);
    this.setState({ value });
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <List>
          <Picker
            loading={this.state.loading}
            data={this.state.data}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}
          >
            <List.Item arrow="right" last onClick={this.onClick}>
              省市选择(异步加载)
            </List.Item>
          </Picker>
          <Picker
            loading={this.state.loading}
            title="选择地区"
            data={district}
            cols={2}
            value={this.state.pickerValue}
            onChange={(v: any) => this.setState({ pickerValue: v })}
            onOk={(v: any) => this.setState({ pickerValue: v })}
          >
            <CustomChildren>Customized children</CustomChildren>
          </Picker>
        </List>
      </View>
    );
  }
}
