// tslint:disable:jsx-no-multiline-js

import React from 'react';
import { Text, View } from 'react-native';
import { WhiteSpace, GapV } from 'popui-rn';

const PlaceHolder = (props: any) => (
  <View
    style={{
      backgroundColor: '#fff',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}
  >
    <Text style={{ color: '#bbb' }}>Block</Text>
  </View>
);

export default class GapVExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace />
        <GapV>
          <PlaceHolder />
        </GapV>

        <WhiteSpace size="lg" />
        <GapV size="md">
          <PlaceHolder />
        </GapV>

        <WhiteSpace size="lg" />
        <GapV size="sm">
          <PlaceHolder />
        </GapV>
      </View>
    );
  }
}
