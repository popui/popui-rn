// tslint:disable:jsx-no-multiline-js
import React from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import { CheckboxWithText, List, GapH } from "popui-rn";
// const CheckboxWithTextItem = CheckboxWithText.CheckboxWithTextItem;

@observer
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

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Text>受控</Text>
          <CheckboxWithText
            checked={this.state.checkBox1}
            style={{ tintColor: "#f00" }}
            onChange={(event: any) => {
              this.setState({ checkBox1: event.target.checked });
            }}
          />

          <GapH />
          <Text>default</Text>
          <CheckboxWithText>CheckboxWithText</CheckboxWithText>

          <GapH />
          <Text>checked disabled</Text>
          <CheckboxWithText checked disabled />

          <GapH />
          <Text>disabled</Text>
          <CheckboxWithText disabled />
        </View>

        <GapH />
        <CheckboxWithText>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </CheckboxWithText>
        <GapH />
        <CheckboxWithText
          checked={this.state.agreeItem1}
          checkboxStyle={{ tintColor: "#f00" }}
          onChange={(event: any) => {
            this.setState({ agreeItem1: event.target.checked });
          }}
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
