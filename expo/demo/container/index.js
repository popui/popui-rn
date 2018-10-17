import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
// import ProgressExample from 'popui-rn/components/progress/demo/basic';
import PickerExample from 'popui-rn/components/picker/demo/basic';
// import Picker2Example from 'popui-rn/components/picker2/demo';
// import { ActionSheet2 } from 'popui-rn'
// import AllComp from 'popui-rn/rn-kitchen-sink/allComponents';
import ResourceLoader from '../common/ResourceLoader';
export default class App extends React.Component {
    render() {
        return (<ResourceLoader>
        <SafeAreaView style={styles.container}>
          
          <PickerExample />
          
        </SafeAreaView>
      </ResourceLoader>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
