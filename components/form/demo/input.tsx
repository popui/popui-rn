import React from 'react'

import { Image, Text,View } from 'react-native'
import {
 Form as FormComps,  
} from 'popui-rn'
import CellComp from 'popui-rn';
const { Cell, CellBody, CellFooter, CellHeader, Cells, CellsTips, CellsTitle, CellText, } = CellComp
 const { CheckboxCells, Input, Label,RadioCells,  TextArea} = FormComps
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
                {/* <CellsTitle>单选列表项</CellsTitle>
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
                /> */}
   
                <Cells>
                    <Cell>
                        <CellHeader><Label>qq</Label></CellHeader>
                        <CellBody>
                            <Input
                                placeholder="请输入 qq 号"
                                value={this.state.text}
                                onChangeText={this.handleChangeText}
                            />
                        </CellBody>
                    </Cell>
                    <Cell vcode error>
                        <CellHeader><Label>验证码</Label></CellHeader>
                        <CellBody><Input placeholder="请输入验证码" defaultValue="111"/></CellBody>
                        <CellFooter><Image source={{ uri: 'https://weui.io/images/vcode.jpg' }}/></CellFooter>
                    </Cell>
                </Cells>
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
