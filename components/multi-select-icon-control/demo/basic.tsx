/* tslint:disable:jsx-no-multiline-js */
import React from 'react';

import { Text, View } from 'react-native';
import { MultiSelectIconControl, GapH } from 'popui-rn';
// const RadioItem = MultiSelectIconControl.RadioItem;


export default class BasicRadioExample extends React.Component<any, any> {
  state = {
    part1Value: 1,
    part2Value: 1,
  };

  render() {
    return (
      <View>
        <View style={{ padding: 10,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff' }}>
          <Text>default</Text>
          <MultiSelectIconControl
          />

          <GapH size='xl'/>
          <Text>checked </Text>
          <MultiSelectIconControl
            checked
          />

          <GapH size='xl'/>
          <Text>checked disabled</Text>
          <MultiSelectIconControl
            checked
            disabled
          />

          <GapH size='xl'/>
          <Text>disabled</Text>
          <MultiSelectIconControl
            disabled
          />
        </View>

        {/* <List style={{ marginTop: 12 }}>
          <Text style={{ marginTop: 12 }}>
            Form radio, radio in general list.
          </Text>
          <RadioItem
            checked={this.state.part2Value === 1}
            onChange={(event: any) => {
              if (event.target.checked) {
                this.setState({ part2Value: 1 });
              }
            }}
          >
            Use Ant Desgin Component
          </RadioItem>
          <RadioItem
            checked={this.state.part2Value === 2}
            onChange={(event: any) => {
              if (event.target.checked) {
                this.setState({ part2Value: 2 });
              }
            }}
          >
            Use Ant Desgin Component
          </RadioItem>
          <RadioItem disabled>Set disabled</RadioItem>
          <RadioItem disabled checked>
            Set disabled
          </RadioItem>
        </List> */}
      </View>
    );
  }
}
