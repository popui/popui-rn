import React from 'react';
import { StyleSheet,  SafeAreaView,Text } from 'react-native';
import SearchBarExample from 'popui-rn/components/search-bar/demo/basic';
import SearchBarAdvancedExample from 'popui-rn/components/search-bar/demo/advanced';
import ResourceLoader from '../common/ResourceLoader';

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader >
        <SafeAreaView style={styles.container}>
          <Text>Basic Example:</Text>
           <SearchBarExample/>
          <Text>Advanced Example:</Text>
           <SearchBarAdvancedExample></SearchBarAdvancedExample>
        </SafeAreaView>
      </ResourceLoader>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
