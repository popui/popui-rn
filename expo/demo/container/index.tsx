import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import CellExample from 'popui-rn/components/cell/demo/basic'
// import ListExample from 'popui-rn/components/list/demo/basic'
import CellListExample from 'popui-rn/components/cell-list/demo/basic'
// import { ActionSheet2 } from 'popui-rn'
import ResourceLoader from '../common/ResourceLoader'
import {GapH} from 'popui-rn'

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <CellExample />

            {/* <ListExample /> */}
            <GapH size="xxl" />

            <CellListExample />
          </ScrollView>
        </SafeAreaView>
      </ResourceLoader>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
})
