/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import { Text, View } from 'react-native'
import { ToggleIconCircle, GapH } from '@popui/popui-rn'
// const RadioItem = ToggleIconCircle.RadioItem;

export default class BasicToggleIconCircleExample extends React.Component<
  any,
  any
> {
  state = {
    part1Value: 1,
    part2Value: 1,
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>ToggleIconCircle 固定值 Example:</Text>

        <GapH />
        <Text>default</Text>
        <ToggleIconCircle />

        <GapH />
        <Text>checked </Text>
        <ToggleIconCircle checked />

        <GapH />
        <Text>checked disabled</Text>
        <ToggleIconCircle checked disabled />

        <GapH />
        <Text>disabled</Text>
        <ToggleIconCircle disabled />
      </View>
    )
  }
}
