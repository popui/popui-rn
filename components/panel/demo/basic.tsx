import { Image, View, ScrollView } from 'react-native'
import {
  CellBadge,
  Media,
  MediaBody,
  MediaDescription,
  MediaHeader,
  MediaInfo,
  MediaInfoMeta,
  MediaTitle,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  Cell,
  CellBody,
  CellFooter,
  CellHeader,
  CellText,
} from '@popui/popui-rn'
import React from 'react'
export interface IProps {}

export default class PanelScreen extends React.Component<IProps, any> {
  static navigationOptions = {
    title: 'Panel',
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#ddd', paddingBottom: 50 }}>
        <Panel>
          <PanelHeader>图文组合列表</PanelHeader>
          <PanelBody>
            <Media type="appmsg">
              <MediaHeader>
                <Image
                  source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}
                />
                <CellBadge preset="header">8</CellBadge>
              </MediaHeader>
              <MediaBody>
                <MediaTitle>标题一</MediaTitle>
                <MediaDescription>
                  由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </MediaDescription>
              </MediaBody>
            </Media>
            <Media type="appmsg">
              <MediaHeader>
                <Image
                  source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}
                />
              </MediaHeader>
              <MediaBody>
                <MediaTitle>标题一</MediaTitle>
                <MediaDescription>
                  由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </MediaDescription>
              </MediaBody>
            </Media>
          </PanelBody>
          <PanelFooter onPress={() => {}} access>
            查看更多
          </PanelFooter>
        </Panel>

        <Panel>
          <PanelHeader>文字组合列表</PanelHeader>
          <PanelBody>
            <Media type="text" onPress={() => {}}>
              <MediaTitle>标题一</MediaTitle>
              <MediaDescription>
                由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
              </MediaDescription>
            </Media>
            <Media type="text" onPress={() => {}}>
              <MediaTitle>标题一</MediaTitle>
              <MediaDescription>
                由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
              </MediaDescription>
            </Media>
          </PanelBody>
          <PanelFooter onPress={() => {}} access>
            查看更多
          </PanelFooter>
        </Panel>

        <Panel>
          <PanelHeader>小图文组合列表</PanelHeader>
          <PanelBody>
            <Cell onPress={() => {}}>
              <CellHeader>
                <Image
                  style={{ width: 24, height: 24, marginRight: 5 }}
                  source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}
                />
              </CellHeader>
              <CellBody>
                <CellText>标题文字</CellText>
              </CellBody>
              <CellFooter access />
            </Cell>
            <Cell onPress={() => {}}>
              <CellHeader>
                <Image
                  style={{ width: 24, height: 24, marginRight: 5 }}
                  source={{ uri: 'https://weui.io/images/icon_tabbar.png' }}
                />
              </CellHeader>
              <CellBody>
                <CellText>标题文字</CellText>
              </CellBody>
              <CellFooter access />
            </Cell>
          </PanelBody>
        </Panel>

        <Panel>
          <PanelHeader>文字列表附来源</PanelHeader>
          <PanelBody>
            <Media type="text">
              <MediaTitle>标题一</MediaTitle>
              <MediaDescription>
                由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
              </MediaDescription>
              <MediaInfo>
                <MediaInfoMeta>文字来源</MediaInfoMeta>
                <MediaInfoMeta>时间</MediaInfoMeta>
                <MediaInfoMeta extra>其他信息</MediaInfoMeta>
              </MediaInfo>
            </Media>
          </PanelBody>
        </Panel>
      </ScrollView>
    )
  }
}
