import * as React from 'react';
import { observer } from 'mobx-react';
import { View, StyleSheet, Text } from 'react-native';
import {CheckboxAgreement} from 'popui-rn';

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
         <CheckboxAgreement
                    value={this.state.agreement}
                    onChange={value => this.setState({ agreement: value })}
                >同意该协议</CheckboxAgreement>
      </View>
    );
  }
}
