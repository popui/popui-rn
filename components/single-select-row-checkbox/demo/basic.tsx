// tslint:disable:jsx-no-multiline-js
import React from "react";

import { Text, View } from "react-native";
import { SingleSelectRowCheckBox,Checkbox, List, GapH } from "popui-rn";
// const CheckboxRowItem = SingleSelectRowCheckBox.CheckboxRowItem;

export default class BasicSingleSelectRowCheckBoxExample extends React.Component<
  any,
  any
> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      agreeItem1: true,
    };
  }
  toggleAgreeItem1 =()=>{
    const {agreeItem1} = this.state
    console.log("toggleAgreeItem1",{
      agreeItem1
    })
    this.setState({ agreeItem1: !agreeItem1 });
  }
  render() {
    return (
        <View style={{ padding: 10 }}>
        <GapH />
        <Text>非受控</Text>
        <SingleSelectRowCheckBox>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </SingleSelectRowCheckBox>

        <GapH />
        <Text>受控</Text>
        <SingleSelectRowCheckBox
          checked={this.state.agreeItem1}
          onChange={this.toggleAgreeItem1}
        >
          Agree agreement
        </SingleSelectRowCheckBox>

        <GapH />
        <SingleSelectRowCheckBox disabled>Not selected. Not editable</SingleSelectRowCheckBox>

        <GapH />
        <SingleSelectRowCheckBox checked disabled>
          Force selected. Not editable
        </SingleSelectRowCheckBox>
      </View>
    );
  }
}
