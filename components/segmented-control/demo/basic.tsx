/* tslint:disable:no-console */
import { GapH, SegmentedControl } from '@popui/popui-rn';
import React from 'react';
import { Text, View } from 'react-native';


export default class BasicTagExample extends React.Component<any, any> {
  onChange = (e: any) => {
    console.log(`selectedIndex:${eEvent.selectedSegmentIndex}`)
  }

  onValueChange = (value: any) => {
    console.log(value)
  }

  render() {
    return (
      <View style={{ paddingTop: 60, paddingHorizontal: 20 }}>
        <Text>Disabled</Text>
        <SegmentedControl values={['Segment1', 'Segment2']} disabled />
        <GapH size="lg" />
        <Text>TintColor and Style</Text>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          tintColor={'#ff0000'}
          style={{ height: 40, width: 280 }}
        />
        <GapH size="lg" />
        <Text>SelectedIndex</Text>
        <SegmentedControl
          selectedIndex={1}
          values={['Segment1', 'Segment2', 'Segment3']}
        />
        <GapH size="lg" />
        <Text>onChange/onValueChange</Text>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </View>
    )
  }
}
