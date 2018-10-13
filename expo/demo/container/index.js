import React from "react";
import { StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import ResourceLoader from "../common/ResourceLoader";
// import SearchBarExample from 'popui-rn/components/search-bar/demo/basic';
// import ListExample from 'popui-rn/components/list/demo/basic';
// import TextInputExample from
// 'popui-rn/components/text-input/demo/basic';
// import BasicTextInputTypeProviderExample from
// 'popui-rn/components/text-input-type-provider/demo/basic';
// import BasicTextInputWithTypeExample from "popui-rn/components/text-input-with-type/demo/basic";
// import FormInputExample from 'popui-rn/components/form/demo/input';
// import TextAreaExample from 'popui-rn/components/textarea-item/demo/basic';
// import BasicTextInputControlsExample from 'popui-rn/components/text-input-controls/demo/basic';
import FormInputExample from "popui-rn/components/form/demo/input";
import CheckboxExample from "popui-rn/components/checkbox/demo/basic";
import RadioExample from "popui-rn/components/radio/demo/basic";
export default class App extends React.Component {
    render() {
        return (<ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text>Form Input: </Text>
            <FormInputExample />
            
            <Text>Checkbox Example:</Text>
            <CheckboxExample />

            <Text>Radio Example:</Text>
            <RadioExample />

            
            
          </ScrollView>
        </SafeAreaView>
      </ResourceLoader>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
