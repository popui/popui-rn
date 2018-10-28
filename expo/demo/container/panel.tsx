import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
// import ProgressExample from 'popui-rn/components/progress/demo/basic';
// import DialogExample from 'popui-rn/components/dialog/demo/basic';
// import ModalExample from 'popui-rn/components/modal/demo/basic';
import PanelExample from "popui-rn/components/panel/demo/basic";
import PreviewExample from "popui-rn/components/preview/demo/basic";
// import ToptipsExample from 'popui-rn/components/toptips/demo/basic';
// import PickerExample from 'popui-rn/components/picker/demo/basic';
// import Picker2Example from 'popui-rn/components/picker2/demo';
// import { ActionSheet2 } from "@popui/popui-rn"
// import AllComp from 'popui-rn/rn-kitchen-sink/allComponents';
import ResourceLoader from "../common/ResourceLoader";

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {/* <ProgressExample /> */}
            {/* <DialogExample /> */}
            {/* <ModalExample /> */}
            <PanelExample />
            <PreviewExample />
            {/* <ToptipsExample /> */}
            {/* <PickerExample/> */}
            {/* <Picker2Example/> */}
          </ScrollView>
        </SafeAreaView>
      </ResourceLoader>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#000',
  }
});
