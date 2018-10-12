import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import ResourceLoader from '../common/ResourceLoader';
// import SearchBarExample from 'popui-rn/components/search-bar/demo/basic';
// import ListExample from 'popui-rn/components/list/demo/basic';
import TextInputExample from 'popui-rn/components/text-input/demo/basic';
// import FormInputExample from 'popui-rn/components/form/demo/input';
// import TextAreaExample from 'popui-rn/components/textarea-item/demo/basic';
// import BasicTextInputControlsExample from 'popui-rn/components/text-input-controls/demo/basic';
export default class App extends React.Component {
    render() {
        return (<ResourceLoader>
        <SafeAreaView style={styles.container}>
        
           
           <Text>TextInput Example:</Text>
          <TextInputExample />

          

        </SafeAreaView>
      </ResourceLoader>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
