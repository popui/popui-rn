import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
// import ActionSheetExample from 'popui-rn/components/action-sheet/demo/basic';
// import { ActionSheet2 } from 'popui-rn'
import AllComp from 'popui-rn/rn-kitchen-sink/allComponents';
import ResourceLoader from '../common/ResourceLoader';
export default class App extends React.Component {
    render() {
        return (<ResourceLoader>
        <SafeAreaView style={styles.container}>
          <AllComp />
        </SafeAreaView>
      </ResourceLoader>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
