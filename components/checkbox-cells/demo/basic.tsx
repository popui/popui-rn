import React from "react";
import { Text, View } from "react-native";
import {
  CellsTitle,
  CheckboxCells,
} from "popui-rn";

export default class InputScreen extends React.Component<any, any> {
  state = {
    checkbox: [1],
  };

  render() {
    return (
      <View>
        <CellsTitle>复选列表项</CellsTitle>
        <CheckboxCells
          options={[
            {
              label: "选项一",
              value: 1
            },
            {
              label: "选项二",
              value: 2
            }
          ]}
          onChange={this.handleCheckboxChange}
          value={this.state.checkbox}
        />

        <CellsTitle>复选列表项(禁用)</CellsTitle>
        <CheckboxCells
          options={[
            {
              label: "选项一",
              value: 1
            },
            {
              label: "选项二",
              value: 2
            }
          ]}
          onChange={this.handleCheckboxChange}
          value={this.state.checkbox}
          disabled
        />
      </View>
    );
  }

  private handleCheckboxChange = (checkbox: any) => {
    this.setState({ checkbox });
  };
}
