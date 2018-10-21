import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Agreement} from 'popui-rn';

@observer
export default class AgreementDemoComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        agreement: false,
    }
  }
  public render() {
    return (
      <View>
         <Agreement
                    value={this.state.agreement}
                    onChange={value => this.setState({ agreement: value })}
                >同意该协议</Agreement>
      </View>
    );
  }
}
