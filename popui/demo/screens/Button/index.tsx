import { Button, ButtonArea, PageWrapper } from 'popui'
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import stylekit from 'react-native-stylekit'

const S = stylekit({})

export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class ButtonScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Button',
    }

    render() {
        return (
            <PageWrapper>
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
            </PageWrapper>
        )
    }
}
