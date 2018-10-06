import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
// import Button from 'popui-rn/components/button/index';
import ToastExample from 'popui-rn/components/toast/demo/basic';
import ResourceLoader from '../common/ResourceLoader';

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader >
        <SafeAreaView style={styles.container}>
          <ToastExample />
        </SafeAreaView>
      </ResourceLoader>
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
