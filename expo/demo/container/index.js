import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
// import {Button} from 'popui-rn';
// import Button from 'popui-rn/components/button/index.native';
import ButtonExample from 'popui-rn/components/button/demo/basic.native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Common Container</Text>
        <Button>Start</Button>
        <ButtonExample />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
