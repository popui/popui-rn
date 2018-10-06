import React from 'react'


import {
  Cell,
  CellBody,
  CellFooter,
  CellHeader,
  Cells,
  CellsTitle,
  Label,
  PageWrapper,
  Picker,
  Select
} from 'popui-rn'
import { Text } from 'react-native'

import {
  pickerData1,
  pickerData2,
  pickerData3
} from 'demoModule/screens/Picker/data'

export interface IProps  {}



export default class PickerScreen extends React.Component<IProps, any> {
  static navigationOptions = {
    title: 'Picker'
  }

  private constructor() {
    super()
    this.state = {
      selectedValue: ['', '', ''],
      select: ['', '', ''],
      pickerVisible: false,
      picker: ['', '', '']
    }
    this.setSelect = this.setSelect.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  render() {
    return (
      <PageWrapper>
        <CellsTitle>选择</CellsTitle>
        <Cells>
          <Cell access>
            <CellBody>
              <Select
                options={pickerData1}
                value={this.state.selectedValue}
                onChange={this.handleSelectChange}
                placeholder="请选择"
              />
            </CellBody>
            <CellFooter />
          </Cell>
          <Cell access>
            <CellHeader>
              <Label>选择地区</Label>
            </CellHeader>
            <CellBody>
              <Select
                options={pickerData2}
                value={this.state.select}
                onChange={this.setSelect}
                placeholder="请选择"
              />
            </CellBody>
            <CellFooter />
          </Cell>
        </Cells>

        <CellsTitle>Picker</CellsTitle>
        <Cells>
          <Cell access>
            <Label>Picker</Label>
            <CellBody>
              <Text onPress={() => this.setState({ pickerVisible: true })}>
                Picker
              </Text>
            </CellBody>
            <CellFooter />
          </Cell>
        </Cells>

        <Picker
          visible={this.state.pickerVisible}
          value={this.state.picker}
          type="cascade"
          options={pickerData3}
          onChange={value => {
            this.setState({ picker: value, pickerVisible: false })
            console.log(value)
          }}
          onClose={() => this.setState({ pickerVisible: false })}
        />
      </PageWrapper>
    )
  }

  private handleSelectChange(value) {
    this.setState({ selectedValue: value })
  }

  private setSelect(value) {
    this.setState({ select: value })
  }
}
