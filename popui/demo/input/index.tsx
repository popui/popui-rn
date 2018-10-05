import React from 'react'

import { Image, Text } from 'react-native'
import {
    Agreement, Cell, CellBody, CellFooter, CellHeader, Cells, CellsTips, CellsTitle, CellText, CheckboxCells, Input, Label, PageWrapper,
    RadioCells, Switch, TextArea,
} from 'popui'


export interface IProps  {

}




export default class InputScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Input',
    }

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
            <PageWrapper>
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
                <CellsTitle>开关</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>标题文字</CellBody>
                        <Switch
                            onChange={this.handleSwitchChange}
                            value={this.state.switchValue}
                        />
                    </Cell>
                </Cells>
                <CellsTitle>表单</CellsTitle>
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
                <CellsTips>底部说明文字底部说明文字</CellsTips>

                <CellsTitle>文本域</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                              <TextArea
                                  placeholder="请输入评论"
                                  value={this.state.textarea}
                                  onChange={this.handleTextareaChange}
                              />
                        </CellBody>
                    </Cell>
                </Cells>

                <Agreement
                    value={this.state.agreement}
                    onChange={value => this.setState({ agreement: value })}
                >同意该协议</Agreement>
            </PageWrapper>
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
