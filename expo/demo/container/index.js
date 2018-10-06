import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// import Button from 'popui-rn/components/button/index';
import ResultExample from 'popui-rn/components/result/demo/basic';
// import Result2Example from 'popui-rn/components/result2/demo/basic';
// import IconExample from 'popui-rn/components/icon-weui/demo/basic';
import ResourceLoader from '../common/ResourceLoader';
export default class App extends React.Component {
    render() {
        return (<ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <ResultExample />
            
          </ScrollView>
        </SafeAreaView>
      </ResourceLoader>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
