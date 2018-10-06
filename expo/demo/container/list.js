import React from 'react';
import { StyleSheet, Text, SafeAreaView,ScrollView } from 'react-native';
// import {Button} from 'popui-rn';
// import Button from 'popui-rn/components/button/index';
import CellExample from 'popui-rn/components/cell/demo/basic.native';
import BadgeExample from 'popui-rn/components/badge/demo/basic.native';
import ListExample from 'popui-rn/components/list/demo/basic.native';
import InputItemExample from 'popui-rn/components/input-item/demo/basic.native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Cell:</Text>
          <CellExample />

          <Text>Badge:</Text>
          <BadgeExample />

          <Text>List:</Text>
          <ListExample />

          <Text>InputItem:</Text>
          <InputItemExample />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
