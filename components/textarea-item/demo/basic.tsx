/* tslint:disable:no-console */
import React from 'react';
import { ScrollView } from 'react-native';
import { List, TextareaItem } from 'popui-rn';

export default class BasicTextAreaItemExample extends React.Component<
  any,
  any
> {
  constructor(props: any) {
    super(props);
    this.state = {
      val: '默认带value',
    };
  }

  onChange = (e: any) => {
    // console.log(val);
    this.setState({ val: e.nativeEvent.text});
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => '基本'}>
          <TextareaItem rows={4}  defaultValue="默认值"/>

          <TextareaItem rows={4} placeholder="多行带计数" count={100} />

          <TextareaItem rows={4} placeholder="高度自适应" autoHeight style={{ paddingVertical: 5 }} />

          <TextareaItem value={this.state.val} onChange={this.onChange} 
          placeholder="onChange事件"/>

          <TextareaItem value="不可编辑 editable = {false}" editable={false} />

          <TextareaItem clear={false} placeholder="不显示清除按钮" />

          <TextareaItem
            error
            placeholder="报错样式 error={true}"
            onErrorClick={() => console.log('err')}
          />
        </List>
      </ScrollView>
    );
  }
}
