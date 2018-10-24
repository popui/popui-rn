import React from "react";
;
import { Text, View } from "react-native";
import {
  CellsTitle,
  SelectHeaderCells,
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

export default class Screen extends React.Component<any, any> {
  state = {
    values1: [1],
    values2: [1],
  };
  private handleCheckbox1Change = (values: any) => {
    console.log("handleCheckbox1Change", {
      values
    })
    this.setState({ values1:values });
  };
  private handleCheckbox2Change = (values: any) => {
    console.log("handleCheckbox2Change", {
      values
    })
    this.setState({ values2:values });
  };
  render() {
    return (
      <View>
        <CellsTitle>复选列表项</CellsTitle>
        <SelectHeaderCells
          options={options}
          onChange={this.handleCheckbox1Change}
          value={this.state.values1}
        />

        <CellsTitle>复选列表项(禁用)</CellsTitle>
        <SelectHeaderCells
          options={options}
          onChange={this.handleCheckbox2Change}
          value={this.state.values2}
          disabled
        />
      </View>
    );
  }
}
