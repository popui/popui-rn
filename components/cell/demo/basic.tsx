import { Image, View,ScrollView } from 'react-native'
import React from 'react'
;
import {
  CellBadge,
  Cell , CellBody, CellFooter,
  CellHeader, Cells, CellsTitle,
  CellText } from 'popui-rn';

export interface IProps  {

}

export default class CellScreen extends React.Component<IProps, any> {
    render() {
        return (
            <View>
                <CellsTitle>带说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>说明文字</CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带图标、说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>说明文字</CellFooter>
                    </Cell>

                    <Cell>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CellText>标题文字</CellText>
                                <CellBadge preset="body">News</CellBadge>
                            </View>
                        </CellBody>
                        <CellFooter>
                            说明文字
                            <CellBadge preset="footer">8</CellBadge>
                        </CellFooter>
                    </Cell>
                </Cells>
                <CellsTitle>带跳转的列表项</CellsTitle>
                <Cells>
                    <Cell access onPress={() => {
                    }}>
                        <CellBody>标题文字</CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell access onPress={() => {
                    }}>
                        <CellBody>标题文字</CellBody>
                        <CellFooter/>
                    </Cell>
                </Cells>
                <CellsTitle>带说明、跳转的列表项</CellsTitle>
                <Cells>
                    <Cell onPress={() => {
                    }}>
                        <CellBody>标题文字</CellBody>
                        <CellFooter access>说明文字</CellFooter>
                    </Cell>
                    <Cell access onPress={() => {
                    }}>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>说明文字</CellFooter>
                    </Cell>
                </Cells>
                <CellsTitle>带图标、说明、跳转的列表项</CellsTitle>
                <Cells>
                    <Cell access disabled onPress={() => {
                    }}>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>说明文字</CellFooter>
                    </Cell>
                    <Cell access onPress={() => {
                    }}>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>说明文字</CellFooter>
                    </Cell>
                </Cells>
            </View>
        )
    }
}
