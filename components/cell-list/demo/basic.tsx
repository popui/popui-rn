/* tslint:disable:jsx-no-multiline-js */
// tslint:disable:no-empty
import React from 'react'

import { Image, ScrollView, View } from 'react-native'
import {
  CellList,
  CellItem,
  CellItemBrief,
  CellItemExtra,
  Badge,
  CellBadge,
  CellItemBody,
} from 'popui-rn'

export default class BasicCellListExample extends React.Component<any, any> {
  render() {
    return (
      <View
        // style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        style={{ backgroundColor: '#eee' }}
        // automaticallyAdjustContentInsets={false}
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      >
        <CellList header="带说明的列表项">
          <CellItem extra="说明文字">标题文字</CellItem>
        </CellList>

        <CellList header="图标、说明、跳转、Badge">
          <CellItem
            extra="说明文字"
            header="https://weui.io/images/icon_tabbar.png"
          >
            带图标、说明
          </CellItem>

          <CellItem
            header="https://weui.io/images/icon_tabbar.png"
            extra={
              <CellItemExtra>
                说明文字
                <CellBadge preset="footer">8</CellBadge>
              </CellItemExtra>
            }
          >
            <CellItemBody>
              带图标、说明、Badge
              <CellBadge preset="body">new</CellBadge>
            </CellItemBody>
          </CellItem>

          <CellItem
            extra="说明文字"
            header="https://weui.io/images/icon_tabbar.png"
            arrow="right"
          >
            带图标、说明、跳转
          </CellItem>

          <CellItem arrow="right">
            <CellItemBody direction="row">
              带说明、跳转、Badge
              <CellBadge preset="header">99+</CellBadge>
            </CellItemBody>
          </CellItem>
        </CellList>

        <CellList header="常用">
          <CellItem data-seed="logId">
            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </CellItem>

          <CellItem wrap>
            body 文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </CellItem>

          <CellItem error extra="extra">
            error
          </CellItem>

          <CellItem
            wrap
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            extra="有需要可自定义 body"
            arrow="right"
          >
            header 下无虚线
          </CellItem>

          <CellItem wrap disabled extra="extra" arrow="right" footer="footer">
            disabled
          </CellItem>
        </CellList>

        <CellList header="箭头">
          <CellItem extra={'arrow="empty"'} arrow="empty">
            没有箭头
          </CellItem>

          <CellItem extra={'arrow="right"'} arrow="right" onClick={() => {}}>
            箭头向右
          </CellItem>

          <CellItem extra={'arrow="up"'} arrow="up" onClick={() => {}}>
            箭头向上
          </CellItem>

          <CellItem extra={'arrow="down"'} arrow="down" onClick={() => {}}>
            箭头向下
          </CellItem>
        </CellList>

        <CellList header="各组件位置(这里是 list title)" footer="list tips">
          <CellItem
            header="https://weui.io/images/icon_tabbar.png"
            error
            extra="extra"
            arrow="right"
            footer="footer"
          >
            item body
          </CellItem>

          <CellItem
            header="https://weui.io/images/icon_tabbar.png"
            extra="extra"
            arrow="right"
            footer="footer"
          >
            左边图标处是 header
          </CellItem>
        </CellList>

        <CellList header="多行,对齐">
          <CellItem
            extra={
              <CellItemExtra direction="column">
                extra 是数组
                <CellItemBrief style={{ textAlign: 'right' }}>
                  Brief 辅助文字内容
                </CellItemBrief>
                ,
              </CellItemExtra>
            }
            multipleLine
          >
            垂直居中对齐
          </CellItem>

          <CellItem extra="extra 内容内容" multipleLine>
            <CellItemBody direction="column">
              垂直居中对齐
              <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
            </CellItemBody>
          </CellItem>

          <CellItem
            wrap
            error
            extra={
              <CellItemExtra error direction="column">
                extra 是 CellItemExtra组件.
                内容内容文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
                <CellItemBrief style={{ textAlign: 'right' }}>
                  Brief 辅助文字内容
                </CellItemBrief>
              </CellItemExtra>
            }
            multipleLine
            arrow="right"
          >
            <CellItemBody direction="column">
              垂直居中对齐
              <CellItemBrief>
                Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
              </CellItemBrief>
              <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
            </CellItemBody>
          </CellItem>

          <CellItem
            wrap
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="right"
          >
            <CellItemBody direction="column">
              顶部对齐
              <CellItemBrief>
                Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
              </CellItemBrief>
              <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
            </CellItemBody>
          </CellItem>

          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            extra={
              <CellItemExtra direction="column">
                extra: CellItemExtra
                <CellItemBrief style={{ textAlign: 'right' }}>
                  Brief 辅助文字内容
                </CellItemBrief>
              </CellItemExtra>
            }
            arrow="down"
            multipleLine
            align="bottom"
          >
            底部对齐
          </CellItem>
        </CellList>

        <CellList header="带缩略图">
          <CellItem header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
            带缩略图
          </CellItem>
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            extra="说明文字"
          >
            带缩略图,说明
          </CellItem>
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            extra="说明文字"
            arrow="right"
          >
            带缩略图,说明,跳转
          </CellItem>
          <CellItem
            extra={
              <Image
                source={{
                  uri:
                    'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{ width: 29, height: 29 }}
              />
            }
            arrow="right"
          >
            extra 为 Image
          </CellItem>
        </CellList>
      </View>
    )
  }
}

export const title = 'CellList'
export const description = 'CellList Example'
