import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
// import {Button} from 'popui-rn';
// import Button from 'popui-rn/components/button/index.native';
import InputItemExample from 'popui-rn/components/input-item/demo/basic.native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <InputItemExample />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
