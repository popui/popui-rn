// tslint:disable:jsx-no-multiline-js
import React from "react";
import { Text, View } from "react-native";
import { Checkbox,  GapH } from "popui-rn";

export default class BasicCheckboxRowExample extends React.Component<
  any,
  any
> {
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
      </View>
    );
  }
}
