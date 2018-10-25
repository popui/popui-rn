/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import { Text, View } from 'react-native'
import { ToggleIconCircle, GapH } from 'popui-rn'
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
        <View >
          <Text>ToggleIconCircle 固定值 Example:</Text>

          <GapH size={'xl'} />
          <Text>default</Text>
          <ToggleIconCircle />

          <GapH size="xl" />
          <Text>checked </Text>
          <ToggleIconCircle checked />

          <GapH size="xl" />
          <Text>checked disabled</Text>
          <ToggleIconCircle checked disabled />

          <GapH size="xl" />
          <Text>disabled</Text>
          <ToggleIconCircle disabled />
        </View>
    )
  }
}
