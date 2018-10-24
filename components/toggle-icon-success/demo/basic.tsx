// tslint:disable:jsx-no-multiline-js
import React from "react";
import { Text, View } from "react-native";
import { ToggleIconSuccess,  GapH } from "popui-rn";

export default class BasicToggleIconSuccessExample extends React.Component<
  any,
  any
> {
  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Text>checked</Text>
          <ToggleIconSuccess
            checked
          />

          <GapH />
          <Text>default</Text>
          <ToggleIconSuccess></ToggleIconSuccess>

          <GapH />
          <Text>checked disabled</Text>
          <ToggleIconSuccess checked disabled />
        </View>
      </View>
    );
  }
}
