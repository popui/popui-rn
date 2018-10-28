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
        <CellList header="单个 Item" footer="提示文字">
          <CellItem body="标题文字" extra="extra 说明文字" arrow="horizontal" />
        </CellList>

        <CellList header="折行">
          <CellItem
            body="标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏"
            data-seed="logId"
          />
          <CellItem
            body="body 文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            wrap
          />
          <CellItem wrap body="body" extra="extra" />
          <CellItem
            wrap
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="body"
            extra="extra"
            arrow="horizontal"
            footer="footer"
          />
        </CellList>

        <CellList header="带说明的列表项">
          <CellItem
            body="标题文字"
            extra="箭头向右"
            arrow="horizontal"
            onClick={() => {}}
          />
          <CellItem
            body="标题文字"
            extra="箭头向下"
            arrow="down"
            onClick={() => {}}
          />
          <CellItem
            body="标题文字"
            extra="箭头向上"
            arrow="up"
            onClick={() => {}}
          />
          <CellItem body="标题文字" extra="没有箭头" arrow="empty" />
        </CellList>

        <CellList header="对齐">
          <CellItem
            body="垂直居中对齐"
            extra={
              <View>
                extra 内容内容
                <CellItemBrief style={{ textAlign: 'right' }}>
                  Brief 辅助文字内容
                </CellItemBrief>
              </View>
            }
            multipleLine
          />
          <CellItem
            body={[
              '垂直居中对齐',
              <CellItemBrief>Brief 辅助文字内容</CellItemBrief>,
            ]}
            extra="内容内容"
            multipleLine
          />
          <CellItem
            wrap
            body={[
              '垂直居中对齐',
              <CellItemBrief>
                Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
              </CellItemBrief>,
              <CellItemBrief>Brief 辅助文字内容</CellItemBrief>,
            ]}
            extra={
              <View>
                extra
                内容内容文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
                <CellItemBrief style={{ textAlign: 'right' }}>
                  Brief 辅助文字内容
                </CellItemBrief>
              </View>
            }
            multipleLine
            arrow="horizontal"
          />

          <CellItem
            wrap
            body={[
              '顶部对齐',
              <CellItemBrief>
                Brief辅助文字内容辅助文字内容辅助文字内容辅助文字内容
              </CellItemBrief>,
              <CellItemBrief>Brief 辅助文字内容</CellItemBrief>,
            ]}
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="horizontal"
          />
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="底部对齐"
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
          />
        </CellList>

        <CellList header="带缩略图">
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="thumb"
          />
          <CellItem
            header="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            body="thumb"
            arrow="horizontal"
          />
          <CellItem
            body="extra为Image"
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
          />
        </CellList>
      </View>
    )
  }
}

export const title = 'CellList'
export const description = 'CellList Example'
