import React from 'react'
import { observer } from 'mobx-react';

import { Badge, Cell, CellBody, CellFooter, CellHeader, Cells, CellsTitle, CellText, GapV } from 'popui-rn'

import { Image, View } from 'react-native'

export interface IProps  {

}




@observer
export default class BadgeScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Badge',
    }

    render() {
        return (
            <GapV>
                <CellsTitle>新消息提示跟摘要信息后，统一在列表右侧</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                            <CellText>单行列表</CellText>
                        </CellBody>
                        <CellFooter>
                            详细信息<Badge preset="footer">3</Badge>
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>未读数红点跟在主题信息后，统一在列表左侧</CellsTitle>
                <Cells>
                    <Cell access>
                        <CellBody>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CellText>单行列表</CellText><Badge preset="body">8</Badge>
                            </View>
                        </CellBody>
                        <CellFooter></CellFooter>
                    </Cell>
                    <Cell access>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CellText>单行列表</CellText><Badge preset="body">8</Badge>
                            </View>
                        </CellBody>
                        <CellFooter>详细信息</CellFooter>
                    </Cell>
                    <Cell access>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CellText>标题文字</CellText><Badge preset="body">News</Badge>
                            </View>
                        </CellBody>
                        <CellFooter></CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>其他</CellsTitle>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>说明文字</CellFooter>
                    </Cell>
                    <Cell access>
                        <CellHeader>
                            <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
                        </CellHeader>
                        <CellBody>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CellText>标题文字</CellText><Badge preset="body">News</Badge>
                            </View>
                        </CellBody>
                        <CellFooter>
                            说明文字<Badge preset="footer">5</Badge>
                        </CellFooter>
                    </Cell>
                </Cells>
            </GapV>
        )
    }
}
