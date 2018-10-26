/* tslint:disable:jsx-no-multiline-js */
// tslint:disable:no-empty
import React from 'react'

import { Image, ScrollView, View } from 'react-native'
import { CellList, CellItem, CellItemBrief } from 'popui-rn'

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
        <CellList header="单个 Item" arrow="horizontal" footer="提示文字">
          <CellItem extra="extra 说明文字">标题文字</CellItem>
        </CellList>

        <CellList header="折行">
          <CellItem data-seed="logId">
            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </CellItem>
          <CellItem wrap>
            body 文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </CellItem>
          <CellItem wrap extra="extra">
            body
          </CellItem>
          <CellItem
            wrap
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            extra="extra"
            arrow="horizontal"
            footer="footer"
          >
            body
          </CellItem>
        </CellList>

        <CellList header="带说明的列表项">
          <CellItem
            disabled
            extra="箭头向右"
            arrow="horizontal"
            onClick={() => {}}
          >
            标题文字
          </CellItem>
          <CellItem extra="箭头向下" arrow="down" onClick={() => {}}>
            标题文字
          </CellItem>
          <CellItem extra="箭头向上" arrow="up" onClick={() => {}}>
            标题文字
          </CellItem>
          <CellItem extra="没有箭头" arrow="empty">
            标题文字
          </CellItem>
        </CellList>

        <CellList header="对齐">
          <CellItem
            extra={
              <View>
                extra 内容内容
                <CellItemBrief style={{ textAlign: 'right' }}>
                Brief 辅助文字内容
                </CellItemBrief>
              </View>
            }
            multipleLine
          >
            垂直居中对齐
          </CellItem>
          <CellItem extra="内容内容" multipleLine>
            垂直居中对齐
            <CellItemBrief >Brief 辅助文字内容</CellItemBrief>
          </CellItem>
          <CellItem
            wrap
            extra={
              <View>
                extra 内容内容文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
                <CellItemBrief style={{ textAlign: 'right' }}>
                Brief 辅助文字内容
                </CellItemBrief>
              </View>
            }
            multipleLine
            arrow="horizontal"
          >
            垂直居中对齐
            <CellItemBrief>
              Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
            </CellItemBrief>
            <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
          </CellItem>

          <CellItem
            wrap
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="horizontal"
          >
            顶部对齐
            <CellItemBrief>
              Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
            </CellItemBrief>
            <CellItemBrief>Brief 辅助文字内容</CellItemBrief>
          </CellItem>
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            extra={
              <View>
                extra 内容内容
                <CellItemBrief style={{ textAlign: 'right' }}>
                  Brief 辅助文字内容
                </CellItemBrief>
              </View>
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
            thumb
          </CellItem>
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
          >
            thumb
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
            arrow="horizontal"
          >
            extra为Image
          </CellItem>
        </CellList>
      </View>
    )
  }
}

export const title = 'CellList'
export const description = 'CellList Example'
