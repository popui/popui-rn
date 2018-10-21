import React from "react";
import { Text, View } from "react-native";
import {
  CellsTitle,
  CheckboxCells,
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
@observer
export default class InputScreen extends React.Component<any, any> {
  state = {
    checkbox1: [1],
    checkbox2: [1],
  };
  private handleCheckbox1Change = (value: any) => {
    console.log("handleCheckbox1Change", {
      value
    })
    this.setState({ checkbox1:value });
  };
  private handleCheckbox2Change = (value: any) => {
    console.log("handleCheckbox2Change", {
      value
    })
    this.setState({ checkbox2:value });
  };
  render() {
    return (
      <View>
        <CellsTitle>复选列表项</CellsTitle>
        <CheckboxCells
          options={options}
          onChange={this.handleCheckbox1Change}
          value={this.state.checkbox1}
        />

        <CellsTitle>复选列表项(禁用)</CellsTitle>
        <CheckboxCells
          options={options}
          onChange={this.handleCheckbox2Change}
          value={this.state.checkbox2}
          disabled
        />
      </View>
    );
  }
}
