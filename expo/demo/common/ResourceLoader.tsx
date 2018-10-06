//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Font } from 'expo';
// create a component
class ResourceLoader extends Component {
  state ={
    loading:true
  }
  async componentDidMount() {
    await Font.loadAsync({
      'weui': require('./../../../assets/fonts/Weui.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    if(this.state.loading){
      return <ActivityIndicator />
    }
    return this.props.children
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ResourceLoader;
