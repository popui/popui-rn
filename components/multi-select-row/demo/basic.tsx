/* tslint:disable:jsx-no-multiline-js */
import React from 'react';

import { View } from 'react-native';
import { MultiSelectRow, GapH } from 'popui-rn';


export default class BasicMultiSelectRowExample extends React.Component<any, any> {
  state = {
    part1Value: 1,
    part2Value: 1,
  };

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <MultiSelectRow
            checked={this.state.part1Value === 1}
            onChange={(event: any) => {
              if (event.target.checked) {
                this.setState({ part1Value: 1 });
              }
            }}
            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}
          >
            Support
          </MultiSelectRow>

          <GapH />
          <MultiSelectRow
            checked={this.state.part1Value === 2}
            onChange={(event: any) => {
              if (event.target.checked) {
                this.setState({ part1Value: 2 });
              }
            }}
            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}
          />
        </View>

      </View>
    );
  }
}
