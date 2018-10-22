// tslint:disable:jsx-no-multiline-js
import React from 'react';
import { observer } from 'mobx-react'
import { Text, View } from 'react-native';
import { Checkbox, List, GapH } from 'popui-rn';
const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;

@observer
export default class BasicCheckboxExample extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
    };
  }

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Checkbox
            checked={this.state.checkBox1}
            style={{ tintColor: '#f00' }}
            onChange={(event: any) => {
              this.setState({ checkBox1: event.target.checked });
            }}
          />
          <GapH />
          <Checkbox>Checkbox</Checkbox>
          <GapH />
          <Checkbox checked disabled />
          <GapH />
          <Checkbox disabled />
        </View>

        <GapH />
        <AgreeItem>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </AgreeItem>
        <GapH />
        <AgreeItem
          checked={this.state.agreeItem1}
          checkboxStyle={{ tintColor: '#f00' }}
          onChange={(event: any) => {
            this.setState({ agreeItem1: event.target.checked });
          }}
        >
          Agree agreement
        </AgreeItem>
        <GapH />
        <AgreeItem disabled>Not selected. Not editable</AgreeItem>
        <GapH />
        <AgreeItem checked disabled>
          Force selected. Not editable
        </AgreeItem>

        <List style={{ marginTop: 12 }}>
          <Text style={{ marginTop: 12 }}>Multiple options</Text>
          <CheckboxItem
            checked={this.state.checkboxItem1}
            onChange={(event: any) => {
              this.setState({ checkboxItem1: event.target.checked });
            }}
          >
            Option 1
          </CheckboxItem>
          <CheckboxItem>Option 2</CheckboxItem>
          <CheckboxItem disabled>Option 3</CheckboxItem>
          <CheckboxItem disabled checked>
            Option 4
          </CheckboxItem>
        </List>
      </View>
    );
  }
}
