/* tslint:disable:no-console */
import React from 'react';

import { DeviceEventEmitter,Text } from 'react-native';
import { Button, Toast, GapH, GapV } from "@popui/popui-rn";
// import ToastContainer from 'popui-rn/components/toast/ToastContainer';
// const testText = "This is a toast tips !!! This is a toast tips !!! This is a toast tips !!! This is a toast tips !!! This is a toast tips !!!"
const testText = "testText..."

function showToast() {
  Toast.info('This is a toast tips !!!');
}

function successToast() {
  Toast.success('Load success !!!', 1);
}

function showToastNoMask() {
  Toast.info('Toast without mask !!!', 1, null, false);
}

function failToast() {
  Toast.fail('Load failed !!!');
}

function offline() {
  Toast.offline('Network connection failed !!!');
}

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

function alwaysLoadingToast() {
  Toast.loading(testText, 0);
}


export default class ToastExample extends React.Component<any, any> {
  timer: any;
  componentDidMount() {
    DeviceEventEmitter.addListener('navigatorBack', () => {
      Toast.hide();
    });
    // alwaysLoadingToast()
  }

  componentWillUnmount() {
    (DeviceEventEmitter as any).removeAllListeners('navigatorBack');
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  alwaysShowToast = () => {
    Toast.info('A toast width duration = 0 !!!', 0);
    this.timer = setTimeout(() => {
      Toast.hide();
    }, 5000);
  }

  render() {
    return (
      <GapV style={{ marginTop: 80 }}>
        <GapH />
        <Button onClick={showToastNoMask}>Without mask</Button>
        <GapH />
        <Button onClick={showToast}>Text toast</Button>
        <GapH />
        <Button onClick={successToast}>Success toast</Button>
        <GapH />
        <Button onClick={failToast}>Failed toast</Button>
        <GapH />
        <Button onClick={offline}>Network failure toast</Button>
        <GapH />
        <Button onClick={loadingToast}>Loading toast</Button>
        <GapH />
        <Button onClick={this.alwaysShowToast}>Toast width duration = 0</Button>
        <GapH />
      </GapV>
    );
  }
}
