import React from "react";
;
import { Text, View } from "react-native";
import {
  Cell,
  CellBody,
  CellsTitle,
  CellsWithSingleSelect,
  GapH
} from "popui-rn";
const options = [
  {
    label: "选项一",
    value: 1
  },
  {
    label: "选项二",
    value: 2
  },
  {
    label: "选项三",
    value: 3
  },
  {
    label: "选项四",
    value: 4
  },
  {
    label: "选项五",
    value: 5
  }
]

export default class InputScreen extends React.Component<any, any> {
  state = {
    value1: 1,
    value2: 2,
  };
  render() {
    return (
      <View>
        <CellsTitle>单选列表项</CellsTitle>
        <CellsWithSingleSelect
          options={options}
          onChange={this.handleRadioChange}
          value={this.state.value1}
        >
          <Cell onPress={() => {}}>
            <CellBody>
              <Text style={{ fontSize: 14, color: "#999" }}>more</Text>
            </CellBody>
          </Cell>
        </CellsWithSingleSelect>

        <GapH />

        <CellsTitle>单选列表项(禁用)</CellsTitle>
        <CellsWithSingleSelect
          options={options}
          onChange={this.handleRadio2Change}
          value={this.state.value2}
          disabled
        >
        </CellsWithSingleSelect>
      </View>
    );
  }

  private handleRadioChange = (value: any) => {
    console.log('handleRadioChange',{
      value
    })
    this.setState({ radio:value });
  };
  private handleRadio2Change = (value: any) => {
    console.log('handleRadioChange',{
      value
    })
    this.setState({ radio2:value });
  };
}
