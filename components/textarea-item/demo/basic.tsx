/* tslint:disable:no-console */
import React from 'react';
import { ScrollView, Alert } from 'react-native';
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
  onClearPress = ()=>{
    Alert.alert('Clear Pressed!')
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
          <TextareaItem error rows={4}  defaultValue="默认值"
          onClearPress={this.onClearPress}/>

          <TextareaItem rows={4} placeholder="多行带计数" count={100} onClearPress={this.onClearPress}/>

          <TextareaItem rows={4} placeholder="高度自适应" autoHeight style={{ paddingVertical: 5 }} onClearPress={this.onClearPress}/>

          <TextareaItem value={this.state.val} onChange={this.onChange} 
          placeholder="onChange事件" onClearPress={this.onClearPress}/>

          <TextareaItem value="不可编辑 editable = {false}" editable={false} onClearPress={this.onClearPress}/>

          <TextareaItem clear={false} placeholder="不显示清除按钮" onClearPress={this.onClearPress}/>

          <TextareaItem
            error
            placeholder="报错样式 error={true}"
            onErrorClick={() => console.log('err')}
            onClearPress={this.onClearPress}
          />
        </List>
      </ScrollView>
    );
  }
}
