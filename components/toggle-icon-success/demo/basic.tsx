// tslint:disable:jsx-no-multiline-js
import React from 'react'
import { Text, View } from 'react-native'
import { ToggleIconSuccess, GapH } from 'popui-rn'

export default class BasicToggleIconSuccessExample extends React.Component<
  any,
  any
> {
  render() {
    return (
        <View >
          <Text>ToggleIconSuccess 固定值 Example:</Text>

          <GapH size={'xl'} />

          <Text>checked</Text>
          <ToggleIconSuccess checked />

          <GapH />
          <Text>default (空)</Text>
          <ToggleIconSuccess />

          <GapH />
          <Text>checked disabled</Text>
          <ToggleIconSuccess checked disabled />
        </View>
    )
  }
}
