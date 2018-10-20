import { WeuiButton as Button, WeuiButtonArea as ButtonArea, GapV } from 'popui-rn'
import React from 'react'
import stylekit from 'react-native-stylekit'
const S = stylekit({})

export interface IProps  {

}

export default class ButtonScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Button',
    }

    render() {
        return (
            <GapV>
                <ButtonArea>
                    <Button type="primary" onPress={() => {
                    }}>Normal</Button>
                    <Button type="primary" disabled onPress={() => {
                    }} style={S.mt15}>Disabled</Button>
                </ButtonArea>
                <ButtonArea style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <Button onPress={() => {
                    }}>Secondary Normal</Button>
                    <Button disabled onPress={() => {
                    }} style={S.mt15}>Secondary Disabled</Button>
                </ButtonArea>
                <ButtonArea direction="horizontal" style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <Button type="warn" onPress={() => {
                    }} style={S.flex1}>Warn Normal</Button>
                    <Button type="warn" disabled onPress={() => {
                    }} style={[S.ml15, S.flex1]}>Disabled</Button>
                </ButtonArea>
                <ButtonArea style={{ paddingLeft: 80, paddingRight: 80 }}>
                    <Button type="primary" plain onPress={() => {
                    }}>Button</Button>
                    <Button plain disabled onPress={() => {
                    }} style={S.mt15}>Button</Button>
                    <Button plain onPress={() => {
                    }} style={S.mt15}>Button</Button>
                </ButtonArea>

                <ButtonArea
                    direction="horizontal"
                    style={{ paddingLeft: 80, paddingRight: 80 }}
                >
                    <Button type="primary" size="small" style={S.mr10} onPress={() => {
                    }}>Button</Button>
                    <Button type="warn" size="small" style={S.mr10} onPress={() => {
                    }}>Button</Button>
                    <Button size="small" onPress={() => {
                    }}>Button</Button>
                </ButtonArea>
            </GapV>
        )
    }
}
