import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export interface CenterProps {
}

export interface CenterState {
}

export default class CenterComponent extends React.Component<CenterProps, CenterState> {
  public render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})