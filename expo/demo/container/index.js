import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
// import {Button} from 'popui-rn';
// import Button from '../../../components/button/index.native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Common Container</Text>
        {/* <Button>Start</Button> */}
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
