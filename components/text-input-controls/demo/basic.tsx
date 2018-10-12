/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { ScrollView, Text, Alert } from 'react-native';
import { Button, TextInputControls, List } from 'popui-rn';


export default class BasicTextInputControlsExample extends React.Component<any, any> {

  render() {
    return (
          <TextInputControls
            clear
            error
            onErrorPress={() => Alert.alert('clicked me')}
            extra="元"
          >
          </TextInputControls>
    );
  }
}
