/* tslint:disable:jsx-no-multiline-js */
// tslint:disable:no-empty
import React from 'react';

import { Image, ScrollView, View } from 'react-native';
import { CellList,CellItem,CellItemBrief } from 'popui-rn';

export default class BasicCellListExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        // style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        style={{backgroundColor:"#eee"}}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CellList renderHeader={() => 'basic'}>
          <CellItem data-seed="logId">
            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </CellItem>
          <CellItem wrap>
            文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </CellItem>
          <CellItem disabled extra="箭头向右" arrow="horizontal" onClick={() => {}}>
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
          <CellItem
            extra={
              <View>
                内容内容
                <CellItemBrief style={{ textAlign: 'right' }}>辅助文字内容</CellItemBrief>
              </View>
            }
            multipleLine
          >
            垂直居中对齐
          </CellItem>
          <CellItem extra="内容内容" multipleLine>
            垂直居中对齐<CellItemBrief>辅助文字内容</CellItemBrief>
          </CellItem>
          <CellItem
            wrap
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="horizontal"
          >
            顶部对齐
            <CellItemBrief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</CellItemBrief>
            <CellItemBrief>辅助文字内容</CellItemBrief>
          </CellItem>
          <CellItem
            extra={
              <View>
                内容内容
                <CellItemBrief style={{ textAlign: 'right' }}>辅助文字内容</CellItemBrief>
              </View>
            }
            multipleLine
            align="bottom"
          >
            底部对齐
          </CellItem>
        </CellList>
        <CellList renderHeader={() => '带缩略图'}>
          <CellItem thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
            thumb
          </CellItem>
          <CellItem
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
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
      </ScrollView>
    );
  }
}

export const title = 'CellList';
export const description = 'CellList Example';
