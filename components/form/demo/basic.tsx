import React from 'react'
import { Text, View } from 'react-native'
// import Select from '../Select'
import Uploader from '../Uploader'
const files = [
  {
    uri: 'https://weui.io/images/icon_tabbar.png',
    error: true,
    status: 'status1',
    isVertical: true,
  },
  {
    uri: 'https://weui.io/images/icon_tabbar.png',
    error: false,
    status: 'status2',
    isVertical: false,
  },
  {
    uri: 'https://weui.io/images/icon_tabbar.png',
    error: false,
    status: 'status3',
    isVertical: true,
  },
]
const options = [
  {
    label: '选项一',
    value: 1,
  },
  {
    label: '选项二',
    value: 2,
  },
  {
    label: '选项三',
    value: 3,
  },
  {
    label: '选项四',
    value: 4,
  },
  {
    label: '选项五',
    value: 5,
  },
]

export default class FormInputSample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Text>FormInputSample 123</Text>
        {/* <Select value={[1]}
        placeholder={"placeholder"}
        options={options} /> */}
        <Uploader
          title="Uploader"
          maxCount={5}
          files={files}
          onChange={() => {}}
          onFilePress={() => {}}
        />
      </View>
    )
  }
}
