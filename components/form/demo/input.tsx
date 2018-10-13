import React from 'react'

import { Text,View } from 'react-native'
import {
 Form as FormComps,
} from 'popui-rn'
import {  Cell, CellBody,  CellsTitle } from 'popui-rn';
 const { CheckboxCells,  RadioCells} = FormComps
export interface IProps  {
}
export default class InputScreen extends React.Component<IProps, any> {
    private constructor() {
        super()
        this.state = {
            radio: '',
            checkbox: [1],
            text: '默认',
            switchValue: false,
            textarea: '',
            agreement: false,
        }
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.handleSwitchChange = this.handleSwitchChange.bind(this)
        this.handleTextareaChange = this.handleTextareaChange.bind(this)
    }

    render() {
        return (
            <View>
                <CellsTitle>单选列表项</CellsTitle>
                <RadioCells
                    options={[
                        {
                            label: '选项一',
                            value: 1,
                        }, {
                            label: '选项二',
                            value: 2,
                        },
                    ]}
                    onChange={this.handleRadioChange}
                    value={this.state.radio}
                >
                    <Cell onPress={() => {
                    }}>
                        <CellBody><Text style={{ fontSize: 14, color: '#999' }}>more</Text></CellBody>
                    </Cell>
                </RadioCells>
                <CellsTitle>复选列表项</CellsTitle>
                <CheckboxCells
                    options={[
                        {
                            label: '选项一',
                            value: 1,
                        }, {
                            label: '选项二',
                            value: 2,
                        },
                    ]}
                    onChange={this.handleCheckboxChange}
                    value={this.state.checkbox}
                    disabled
                />
            </View>
        )
    }

    private handleRadioChange(radio) {
        this.setState({ radio })
    }

    private handleCheckboxChange(checkbox) {
        this.setState({ checkbox })
    }

    private handleChangeText(text) {
        this.setState({ text })
    }

    private handleSwitchChange(switchValue) {
        this.setState({ switchValue })
    }

    private handleTextareaChange(textarea) {
        this.setState({ textarea })
    }
}
