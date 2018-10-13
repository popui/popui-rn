import React from "react";
import { Text, View } from "react-native";
import {
  Cell,
  CellBody,
  CellsTitle,
  CheckboxCells,
  RadioCells
} from "popui-rn";

export default class InputScreen extends React.Component<any, any> {
  state = {
    radio: "",
    checkbox: [1],
  };

  render() {
    return (
      <View>
        <CellsTitle>单选列表项</CellsTitle>
        <RadioCells
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
          onChange={this.handleRadioChange}
          value={this.state.radio}
        >
          <Cell onPress={() => {}}>
            <CellBody>
              <Text style={{ fontSize: 14, color: "#999" }}>more</Text>
            </CellBody>
          </Cell>
        </RadioCells>
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
          disabled
        />
      </View>
    );
  }

  private handleRadioChange = (radio: any) => {
    this.setState({ radio });
  };

  private handleCheckboxChange = (checkbox: any) => {
    this.setState({ checkbox });
  };
}
