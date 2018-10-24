/* tslint:disable:jsx-no-multiline-js */
import React from 'react';

import { View } from 'react-native';
import { ToggleRowCircle, GapH } from 'popui-rn';


export default class BasicToggleRowCircleExample extends React.Component<any, any> {
  state = {
    part1Value: 1,
    part2Value: 1,
  };

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <ToggleRowCircle
            checked={this.state.part1Value === 1}
            onChange={(event: any) => {
              if (event.target.checked) {
                this.setState({ part1Value: 1 });
              }
            }}
          >
            Support
          </ToggleRowCircle>

          <GapH />
          <ToggleRowCircle
            checked={this.state.part1Value === 2}
            onChange={(event: any) => {
              if (event.target.checked) {
                this.setState({ part1Value: 2 });
              }
            }}
          />
        </View>

      </View>
    );
  }
}
