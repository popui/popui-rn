import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ActionSheetExample from 'popui-rn/components/action-sheet/demo/basic.native';
import { ActionSheet2 } from 'popui-rn'

export default class App extends React.Component {
  hideActionSheet=()=>{

  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <Text>ActionSheetExample:</Text>
        <ActionSheetExample />

        <Text>ActionSheet2Example:</Text>
        <ActionSheet2
          autoDectect={false}
          type="android"
          visible={true}
          onClose={this.hideActionSheet}
          menus={[
              {
                  type: 'default',
                  label: '拍照',
                  onPress: this.hideActionSheet,
              }, {
                  type: 'default',
                  label: '从手机相册选择',
                  onPress: this.hideActionSheet,
              },
          ]}
          actions={[
              {
                  type: 'default',
                  label: '取消',
                  onPress: this.hideActionSheet,
              },
          ]}
      />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
