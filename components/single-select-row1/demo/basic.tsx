// tslint:disable:jsx-no-multiline-js
import React from "react";

import { Text, View } from "react-native";
import { CheckboxRow,Checkbox, List, GapH } from "popui-rn";
// const CheckboxRowItem = CheckboxRow.CheckboxRowItem;


export default class BasicCheckboxRowExample extends React.Component<
  any,
  any
> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true
    };
  }
  toggleCheckBox1 =()=>{
    const {checkBox1} = this.state
    console.log("toggleCheckBox1",{
      checkBox1
    })
    this.setState({ checkBox1: !checkBox1 });
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
      <View>
        <View style={{ padding: 10 }}>
          <Text>checked</Text>
          <Checkbox
            checked
          />

          <GapH />
          <Text>default</Text>
          <Checkbox></Checkbox>

          <GapH />
          <Text>checked disabled</Text>
          <Checkbox checked disabled />

          <GapH />
          <Text>disabled</Text>
          <Checkbox disabled />
        </View>

        <GapH />
        <Text>非受控</Text>
        <CheckboxRow>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </CheckboxRow>

        <GapH />
        <Text>受控</Text>
        <CheckboxRow
          checked={this.state.agreeItem1}
          onChange={this.toggleAgreeItem1}
        >
          Agree agreement
        </CheckboxRow>

        <GapH />
        <CheckboxRow disabled>Not selected. Not editable</CheckboxRow>

        <GapH />
        <CheckboxRow checked disabled>
          Force selected. Not editable
        </CheckboxRow>

        {/* <List style={{ marginTop: 12 }}>
          <Text style={{ marginTop: 12 }}>Multiple options</Text>
          <CheckboxRowItem
            checked={this.state.checkboxItem1}
            onChange={(event: any) => {
              this.setState({ checkboxItem1: event.target.checked });
            }}
          >
            Option 1
          </CheckboxRowItem>
          <CheckboxRowItem>Option 2</CheckboxRowItem>
          <CheckboxRowItem disabled>Option 3</CheckboxRowItem>
          <CheckboxRowItem disabled checked>
            Option 4
          </CheckboxRowItem>
        </List> */}
      </View>
    );
  }
}
