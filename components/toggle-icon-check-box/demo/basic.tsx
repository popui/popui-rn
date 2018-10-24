// tslint:disable:jsx-no-multiline-js
import React from "react";
import { Text, View } from "react-native";
import { ToggleIconCheckBox,  GapH } from "popui-rn";

export default class BasicCheckboxRowExample extends React.Component<
  any,
  any
> {
  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Text>checked</Text>
          <ToggleIconCheckBox
            checked
          />

          <GapH />
          <Text>default</Text>
          <ToggleIconCheckBox></ToggleIconCheckBox>

          <GapH />
          <Text>checked disabled</Text>
          <ToggleIconCheckBox checked disabled />

          <GapH />
          <Text>disabled</Text>
          <ToggleIconCheckBox disabled />
        </View>
      </View>
    );
  }
}
