import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
// import ProgressExample from 'popui-rn/components/progress/demo/basic';
// import PickerExample from 'popui-rn/components/picker/demo/basic';
// import BadgeExample from "popui-rn/components/badge/demo/basic";
// import CellBadgeExample from "popui-rn/components/cell-badge/demo/basic";
// import ModalDialogExample from "popui-rn/components/dialog/demo/basic";
// import CheckboxWithTextExample from "popui-rn/components/checkbox-with-text/demo/basic";

import RadioExample from "popui-rn/components/radio/demo/basic";// import Modal2Example from "popui-rn/components/modal2/demo/basic";
// import Picker2Example from 'popui-rn/components/picker2/demo';
// import { ActionSheet2 } from 'popui-rn'
// import AllComp from 'popui-rn/rn-kitchen-sink/allComponents';
import ResourceLoader from "../common/ResourceLoader";


export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {/* <ProgressExample /> */}
            {/* <PickerExample/> */}
            {/* <BadgeExample />
            <CellBadgeExample /> */}
            {/* <Picker2Example/> */}
            {/* <CheckboxWithTextExample /> */}
            <RadioExample/>
            {/* <Modal2Example /> */}
          </ScrollView>
        </SafeAreaView>
      </ResourceLoader>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
});
