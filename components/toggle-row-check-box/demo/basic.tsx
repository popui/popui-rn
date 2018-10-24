// tslint:disable:jsx-no-multiline-js
import React from "react";

import { Text, View } from "react-native";
import { ToggleRowCheckBox, GapH } from "popui-rn";
// const CheckboxRowItem = ToggleRowCheckBox.CheckboxRowItem;

export default class BasicToggleRowCheckBoxExample extends React.Component<
  any,
  any
> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      value1: true,
    };
  }
  toggleValue1 =()=>{
    const {agreeItem1} = this.state
    this.setState({ agreeItem1: !agreeItem1 });
  }
  render() {
    return (
        <View style={{ padding: 10 }}>
        <GapH />
        <Text>非受控</Text>
        <ToggleRowCheckBox>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </ToggleRowCheckBox>

        <GapH />
        <Text>受控</Text>
        <ToggleRowCheckBox
          checked={this.state.value1}
          onChange={this.toggleValue1}
        >
          Agree agreement
        </ToggleRowCheckBox>

        <GapH />
        <ToggleRowCheckBox disabled>Not selected. Not editable</ToggleRowCheckBox>

        <GapH />
        <ToggleRowCheckBox checked disabled>
          Force selected. Not editable
        </ToggleRowCheckBox>
      </View>
    );
  }
}
