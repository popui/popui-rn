import React from 'react';
import { StyleSheet,  SafeAreaView,Text } from 'react-native';
import SearchBarExample from 'popui-rn/components/search-bar/demo/basic';
import SearchBar2Example from 'popui-rn/components/search-bar2/demo/basic';
import ResourceLoader from '../common/ResourceLoader';

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader >
        <SafeAreaView style={styles.container}>
          <Text>SearchBar Example:</Text>
           <SearchBarExample/>
           <Text>SearchBar2 Example:</Text>
          <SearchBar2Example />
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
