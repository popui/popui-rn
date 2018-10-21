// tslint:disable:jsx-no-multiline-js
import React from 'react';
import { observer } from 'mobx-react'
import { Text, View } from 'react-native';
import { GapH } from 'popui-rn';

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

@observer
export default class GapHExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <GapH size="xs" />
        <PlaceHolder />

        <GapH size="sm" />
        <PlaceHolder />

        <GapH />
        <PlaceHolder />

        <GapH size="lg" />
        <PlaceHolder />

        <GapH size="xl" />
        <PlaceHolder />
      </View>
    );
  }
}
