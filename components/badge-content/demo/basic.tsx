import React from 'react'
import { CellBadge ,Badge, Cell, CellBody, CellFooter, CellHeader, Cells, CellsTitle, CellText } from "@popui/popui-rn"

import { Image, View } from 'react-native'

export interface IProps  {

}

export default class CellBadgeScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'CellBadge',
    }
    renderCellWithPreset2 =(preset:string)=>{
        // 'default', 'header', 'body', 'footer'
        return (<Cell access>
            <CellHeader>
                <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
            </CellHeader>
            <CellBody>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CellText>{`preset:${preset}`}</CellText>
                    <CellBadge preset={preset}>100+</CellBadge>
                </View>
            </CellBody>
            <CellFooter>详细信息</CellFooter>
        </Cell>)
    }
    renderCellWithBadgeTop =()=>{
        // 'default', 'header', 'body', 'footer'
        return (<Cell access>
            <CellHeader>
                <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
            </CellHeader>
            <CellBody>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Badge text={109} overflowCount={100}>
                        <CellText>顶部 溢出</CellText>
                    </Badge>
                </View>
            </CellBody>
            <CellFooter>详细信息</CellFooter>
        </Cell>)
    }
    renderCellWithBadgeCenter =()=>{
        // 'default', 'header', 'body', 'footer'
        return (<Cell access>
            <CellHeader>
                <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
            </CellHeader>
            <CellBody>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CellText>居中 数字, 分离</CellText>
                    <Badge text={8}></Badge>
                </View>
            </CellBody>
            <CellFooter>详细信息</CellFooter>
        </Cell>)
    }
    renderCellWithBadgeCenter2 =()=>{
        // 'default', 'header', 'body', 'footer'
        return (<Cell access>
            <CellHeader>
                <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
            </CellHeader>
            <CellBody>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Badge text={8}>
                    <CellText>居中 数字, 嵌套</CellText>
                    </Badge>
                </View>
            </CellBody>
            <CellFooter>详细信息</CellFooter>
        </Cell>)
    }
    renderCellWithBadgeText =()=>{
        // 'default', 'header', 'body', 'footer'
        return (<Cell access>
            <CellHeader>
                <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
            </CellHeader>
            <CellBody>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Badge text={"new"}>
                        <CellText>右上方文本</CellText>
                    </Badge>
                </View>
            </CellBody>
            <CellFooter>详细信息</CellFooter>
        </Cell>)
    }
    renderCellWithBadgeDot =()=>{
        // 'default', 'header', 'body', 'footer'
        return (<Cell access>
            <CellHeader>
                <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}/>
            </CellHeader>
            <CellBody>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Badge dot>
                        <CellText>小圆点</CellText>
                    </Badge>
                </View>
            </CellBody>
            <CellFooter>详细信息</CellFooter>
        </Cell>)
    }
    render() {
        return (
            <View>
                <CellsTitle>新消息提示跟摘要信息后，统一在列表右侧</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                            <CellText>单行列表</CellText>
                        </CellBody>
                        <CellFooter>
                            详细信息
                            <CellBadge preset="footer">3</CellBadge>
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>未读数红点跟在主题信息后，统一在列表左侧</CellsTitle>
                <Cells>
                    <Cell access>
                        <CellBody>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CellText>单行列表</CellText><CellBadge preset="body">8</CellBadge>
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
                                <CellText>标题文字</CellText><CellBadge preset="body">News</CellBadge>
                            </View>
                        </CellBody>
                        <CellFooter></CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>preset</CellsTitle>
                <Cells>
                    {this.renderCellWithBadgeTop()}
                    {this.renderCellWithBadgeCenter()}
                    {this.renderCellWithBadgeCenter2()}
                    {this.renderCellWithBadgeText()}
                    {this.renderCellWithBadgeDot()}
                </Cells>
                
                <CellsTitle>preset</CellsTitle>
                <Cells>
                    {this.renderCellWithPreset2('default')}
                    {this.renderCellWithPreset2('header')}
                    {this.renderCellWithPreset2('body')}
                    {this.renderCellWithPreset2('footer')}
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
                                <CellText>标题文字</CellText>
                                <CellBadge preset="body">News</CellBadge>
                            </View>
                        </CellBody>
                        <CellFooter>
                            说明文字
                            <CellBadge preset="footer">5</CellBadge>
                        </CellFooter>
                    </Cell>
                </Cells>
            </View>
        )
    }
}
