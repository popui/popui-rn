import React from 'react';
import { View } from 'react-native';
import { ImagePicker, WhiteSpace } from 'popui-rn';

export default class ImagePickerExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      files: [
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2121',
        },
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2122',
        },
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2123',
        },
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2124',
        },
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2125',
        },
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2126',
        },
      ],
      files2: [],
    };
  }

  handleFileChange = (files: any) => {
    this.setState({
      files,
    });
  }

  handleFile2Change = (files2: any) => {
    this.setState({
      files2,
    });
  }

  render() {
    return (
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <ImagePicker
          onChange={this.handleFileChange}
          files={this.state.files}
          multiple={true}
        />
        <WhiteSpace />
        <ImagePicker
          onChange={this.handleFile2Change}
          files={this.state.files2}
        />
      </View>
    );
  }
}
