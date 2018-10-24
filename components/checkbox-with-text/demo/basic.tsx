// tslint:disable:jsx-no-multiline-js
import React from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import { CheckboxWithText,Checkbox, List, GapH } from "popui-rn";
// const CheckboxWithTextItem = CheckboxWithText.CheckboxWithTextItem;


export default class BasicCheckboxWithTextExample extends React.Component<
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
        <CheckboxWithText>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </CheckboxWithText>

        <GapH />
        <Text>受控</Text>
        <CheckboxWithText
          checked={this.state.agreeItem1}
          onChange={this.toggleAgreeItem1}
        >
          Agree agreement
        </CheckboxWithText>

        <GapH />
        <CheckboxWithText disabled>Not selected. Not editable</CheckboxWithText>

        <GapH />
        <CheckboxWithText checked disabled>
          Force selected. Not editable
        </CheckboxWithText>

        {/* <List style={{ marginTop: 12 }}>
          <Text style={{ marginTop: 12 }}>Multiple options</Text>
          <CheckboxWithTextItem
            checked={this.state.checkboxItem1}
            onChange={(event: any) => {
              this.setState({ checkboxItem1: event.target.checked });
            }}
          >
            Option 1
          </CheckboxWithTextItem>
          <CheckboxWithTextItem>Option 2</CheckboxWithTextItem>
          <CheckboxWithTextItem disabled>Option 3</CheckboxWithTextItem>
          <CheckboxWithTextItem disabled checked>
            Option 4
          </CheckboxWithTextItem>
        </List> */}
      </View>
    );
  }
}
