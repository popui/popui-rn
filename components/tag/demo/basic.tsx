// tslint:disable:jsx-no-multiline-js
/* tslint:disable:no-console */
import React from 'react';
import { observer } from 'mobx-react'
import { View } from 'react-native';
import { Tag, GapH } from 'popui-rn';

function onChange(selected: any) {
  console.log(`tag selected: ${selected}`);
}

@observer
export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <GapH />
        <Tag selected>Selected</Tag>
        <GapH />
        <Tag disabled>Disabled</Tag>
        <GapH />
        <Tag onChange={onChange}>Callback</Tag>
        <GapH />
        <Tag
          closable
          onClose={() => {
            console.log('onClose');
          }}
          afterClose={() => {
            console.log('afterClose');
          }}
        >
          Closable
        </Tag>
        <GapH />
        <Tag small>Small and Readonly</Tag>
        <GapH />
        <Tag
          onLongPress={() => {
            console.log('onLongPress');
          }}
        >
          LongPress
        </Tag>
      </View>
    );
  }
}
