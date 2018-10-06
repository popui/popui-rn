import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Button from 'popui-rn/components/button/index';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button >Button Test</Button>
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
