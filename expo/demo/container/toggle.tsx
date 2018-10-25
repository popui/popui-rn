import React from "react";
import { StyleSheet, SafeAreaView, ScrollView,Text } from "react-native";
// import ProgressExample from 'popui-rn/components/progress/demo/basic';
// import PickerExample from 'popui-rn/components/picker/demo/basic';
// import BadgeExample from "popui-rn/components/badge/demo/basic";
// import CellBadgeExample from "popui-rn/components/cell-badge/demo/basic";
// import ModalDialogExample from "popui-rn/components/dialog/demo/basic";
// import CheckboxWithTextExample from "popui-rn/components/checkbox-with-text/demo/basic";
import {GapH} from 'popui-rn'

import CellsWithMultiSelectExample from "popui-rn/components/cells-with-multi-select/demo/basic";
import CellsWithSingleSelectExample from "popui-rn/components/cells-with-single-select/demo/basic";

import CheckBoxExample from
"popui-rn/components/toggle-icon-check-box/demo/basic";
import CircleExample from "popui-rn/components/toggle-icon-circle/demo/basic";
import SuccessExample from "popui-rn/components/toggle-icon-success/demo/basic";

import ToggleRowExample from "popui-rn/components/toggle-row/demo/basic";
// import Modal2Example from "popui-rn/components/modal2/demo/basic";
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

            <GapH size="xl"/>
            <CheckBoxExample/>

            <GapH size="xl"/>
            <CircleExample/>

            <GapH size="xl"/>
            <SuccessExample/>

            <GapH size="xl"/>
            <Text>ToggleRowExample:</Text>
            <ToggleRowExample/>

            <GapH size="xl"/>
            <Text>CellsWithSingleSelectExample:</Text>
            <CellsWithSingleSelectExample />

            <GapH size="xl"/>
            <Text>CellsWithMultiSelectExample:</Text>
            <CellsWithMultiSelectExample/>
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