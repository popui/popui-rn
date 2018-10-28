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
  BadgeContent,
  CellItemBody,
  CellItemText,
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
          <CellItem body="标题文字" extra="说明文字" />
        </CellList>

        <CellList header="图标、说明、跳转、Badge">
          <CellItem
            body="带图标、说明"
            extra="说明文字"
            header="https://weui.io/images/icon_tabbar.png"
          />

          <CellItem
            header="https://weui.io/images/icon_tabbar.png"
            extra={
              <CellItemExtra>
                说明文字
                <BadgeContent ml mr>
                  8
                </BadgeContent>
              </CellItemExtra>
            }
            body={(props) => (
              <CellItemBody {...props}>
                {/* <Badge text="new">
                  <CellItemText>
                  带图标、说明、Badge
                  </CellItemText>
                </Badge> */}
                带图标、说明、Badge
                <BadgeContent ml>new</BadgeContent>
              </CellItemBody>
            )}
          />

          <CellItem
            extra="带图标、说明、跳转"
            header="https://weui.io/images/icon_tabbar.png"
            body="标题文字"
            arrow="right"
          />

          <CellItem
            error
            arrow="right"
            body={(props) => (
              <CellItemBody {...props} direction="row">
                <Badge text={198}>
                  <CellItemText error>带说明、跳转、Badge</CellItemText>
                </Badge>
              </CellItemBody>
            )}
          />
        </CellList>

        <CellList header="常用">
          <CellItem
            data-seed="logId"
            body="标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏"
          />

          <CellItem
            wrap
            body="body 文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
          />

          <CellItem error body="error" extra="extra" />

          <CellItem
            wrap
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="header 下无虚线"
            extra="有需要可自定义 body"
            arrow="right"
          />

          <CellItem
            wrap
            disabled
            body="disabled"
            extra="extra"
            arrow="right"
            footer="footer"
          />
        </CellList>

        <CellList header="箭头">
          <CellItem body="没有箭头" extra={'arrow="empty"'} arrow="empty" />

          <CellItem
            body="箭头向右"
            extra={'arrow="right"'}
            arrow="right"
            onClick={() => {}}
          />

          <CellItem
            body="箭头向上"
            extra={'arrow="up"'}
            arrow="up"
            onClick={() => {}}
          />

          <CellItem
            body="箭头向下"
            extra={'arrow="down"'}
            arrow="down"
            onClick={() => {}}
          />
        </CellList>

        <CellList header="各组件位置(这里是 list title)" footer="list tips">
          <CellItem
            header="https://weui.io/images/icon_tabbar.png"
            body="item body"
            error
            extra="extra"
            arrow="right"
            footer="footer"
          />

          <CellItem
            header="https://weui.io/images/icon_tabbar.png"
            body="左边图标处是 header"
            extra="extra"
            arrow="right"
            footer="footer"
          />
        </CellList>

        <CellList header="多行,对齐">
          <CellItem
            body="垂直居中对齐"
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
          />

          <CellItem
            extra="extra 内容内容"
            multipleLine
            body={(props) => (
              <CellItemBody {...props} direction="column">
                垂直居中对齐
                <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
              </CellItemBody>
            )}
          />

          <CellItem
            wrap
            error
            body={(props) => (
              <CellItemBody {...props} direction="column">
                垂直居中对齐
                <CellItemBrief>
                  Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
                </CellItemBrief>
                <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
              </CellItemBody>
            )}
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
          />

          <CellItem
            wrap
            body={(props) => (
              <CellItemBody {...props} direction="column">
                顶部对齐
                <CellItemBrief>
                  Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
                </CellItemBrief>
                <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
              </CellItemBody>
            )}
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="right"
          />

          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="底部对齐"
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
          />
        </CellList>

        <CellList header="带缩略图">
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="带缩略图"
          />
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="带缩略图,说明"
            extra="说明文字"
          />
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="带缩略图,说明,跳转"
            extra="说明文字"
            arrow="right"
          />
          <CellItem
            body="extra 为 Image"
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
          />
        </CellList>
      </View>
    )
  }
}

export const title = 'CellList'
export const description = 'CellList Example'
