import React from 'react';
import { StyleSheet,  SafeAreaView } from 'react-native';
// import ActionSheetExample from 'popui-rn/components/action-sheet/demo/basic';
// import { ActionSheet2 } from 'popui-rn'
import AllComp from '../../../rn-kitchen-sink/allComponents';

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AllComp />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
