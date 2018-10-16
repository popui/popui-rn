import React from 'react';
import { View } from 'react-native';
import { ImagePicker,ImagePickerHeader, WhiteSpace } from 'popui-rn';

export default class ImagePickerExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      files: [
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2121',
          error:true
        },
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2122',
          statusText:"status"
        },
        {
          uri: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2123',
          loading:true
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
  renderHeader =()=>{
    return <ImagePickerHeader title="Uploader"
    filesLength={this.state.files.length}
    maxCount={6}
    />
  }
  render() {
    return (
      <View >
        <ImagePicker
          onChange={this.handleFileChange}
          files={this.state.files}
          multiple={true}
          renderHeader={this.renderHeader}
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
