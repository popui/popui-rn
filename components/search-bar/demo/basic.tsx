import React from 'react';
import { Alert } from 'react-native';
import { SearchBar,GapH,ScrollView } from 'popui-rn';
import SearchBarWithResult from './SearchBarWithResult'
export default class SearchBarDemo extends React.Component<any, any> {
  state = {
    value: '美食',
  };

  onChange = (value: any) => {
    this.setState({ value });
  }

  clear = () => {
    this.setState({ value: '' });
  }
  renderSearchWithResult =() =>{

  }
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <GapH />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
        <GapH />
        <SearchBarWithResult />
      </ScrollView>
    );
  }
}
