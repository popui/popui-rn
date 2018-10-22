/* tslint:disable:jsx-no-multiline-js */
import treeFilter from 'array-tree-filter';
import React from 'react';
import { observer } from 'mobx-react'
import RMCCascader from 'rmc-cascader/lib/Cascader';
import RMCPopupCascader from 'rmc-cascader/lib/Popup';
import RMCMultiPicker from 'rmc-picker/lib/MultiPicker';
import RMCPicker from 'rmc-picker/lib/Picker';
import { getComponentLocale } from '../_util/getLocale';
import { PickerData, PickerPropsType } from './PropsType';
import { ActivityIndicator,View,StyleSheet } from 'react-native';
import { noopFunc} from '../_util/noop'
export interface AbstractPickerProps extends PickerPropsType {
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
}

export function getDefaultProps() {
  const defaultFormat = (values: string[]) => {
    return values.join(',');
  };
  return {
    triggerType: 'onClick',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    format: defaultFormat,
    cols: 3,
    cascade: true,
    title: '',
    loading:false,
    onOk:noopFunc
  };
}

export default abstract class AbstractPicker extends React.Component<
  AbstractPickerProps,
  any
> {
  protected abstract popupProps: {};
  private scrollValue: any;

  getSel = () => {
    const value = this.props.value || [];
    let treeChildren: PickerData[];
    const { data } = this.props;
    if (this.props.cascade) {
      treeChildren = treeFilter(data as PickerData[], (c: any, level: any) => {
        return c.value === value[level];
      });
    } else {
      treeChildren = value.map((v, i) => {
        return (data as PickerData[][])[i].filter(d => d.value === v)[0];
      });
    }
    return (
      this.props.format &&
      this.props.format(
        treeChildren.map(v => {
          return v.label;
        }),
      )
    );
  }

  getPickerCol = () => {
    const { data, pickerPrefixCls, itemStyle, indicatorStyle } = this.props;
    return (data as PickerData[][]).map((col, index) => {
      return (
        <RMCPicker
          key={index}
          prefixCls={pickerPrefixCls}
          style={{ flex: 1 }}
          itemStyle={itemStyle}
          indicatorStyle={indicatorStyle}
        >
          {col.map(item => {
            return (
              <RMCPicker.Item key={item.value} value={item.value}>
                {item.label}
              </RMCPicker.Item>
            );
          })}
        </RMCPicker>
      );
    });
  }

  onOk = (v: any) => {
    if (this.scrollValue !== undefined) {
      v = this.scrollValue;
    }
    if (this.props.onChange) {
      this.props.onChange(v);
    }
    if (this.props.onOk) {
      this.props.onOk(v);
    }
  }

  setScrollValue = (v: any) => {
    this.scrollValue = v;
  }

  setCasecadeScrollValue = (v: any) => {
    // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
    if (v && this.scrollValue) {
      const length = this.scrollValue.length;
      if (
        length === v.length &&
        this.scrollValue[length - 1] === v[length - 1]
      ) {
        return;
      }
    }
    this.setScrollValue(v);
  }

  fixOnOk = (cascader: any) => {
    if (cascader && cascader.onOk !== this.onOk) {
      cascader.onOk = this.onOk;
      cascader.forceUpdate();
    }
  }

  onPickerChange = (v: any) => {
    this.setScrollValue(v);
    if (this.props.onPickerChange) {
      this.props.onPickerChange(v);
    }
  }

  onVisibleChange = (visible: boolean) => {
    this.setScrollValue(undefined);
    if (this.props.onVisibleChange) {
      this.props.onVisibleChange(visible);
    }
  }

  renderCascader = () =>{
    const {
      itemStyle,
      indicatorStyle,
      cascade,
      prefixCls,
      pickerPrefixCls,
      data,
      cols,
      loading,
      styles
    } = this.props;
    if(loading){
      return <View style={[styles.cascade,styles.cascadeStyle,styles.cascadeLoading]}>
        <ActivityIndicator />
      </View>
    }
    let cascader;
    const cascadeStyle = {
      ...StyleSheet.flatten(styles.cascade),
      ...StyleSheet.flatten(styles.cascadeStyle)
    }
    if (cascade) {
      cascader = (
        <RMCCascader
          style={cascadeStyle}
          prefixCls={prefixCls}
          pickerPrefixCls={pickerPrefixCls}
          data={data as PickerData[]}
          cols={cols}
          onChange={this.onPickerChange}
          onScrollChange={this.setCasecadeScrollValue}
          pickerItemStyle={itemStyle}
          indicatorStyle={indicatorStyle}
        />
      );
    } else {
      cascader = (
        <RMCMultiPicker
          style={cascadeStyle}
          prefixCls={prefixCls}
          onScrollChange={this.setScrollValue}
        >
          {this.getPickerCol()}
        </RMCMultiPicker>
      );
    }
    return cascader
  }
  getPopupMoreProps =()=>{
    const {
      cascade,
    } = this.props;
    let popupMoreProps = {};
    if(!cascade){
      popupMoreProps = {
        pickerValueProp: 'selectedValue',
        pickerValueChangeProp: 'onValueChange',
      };
    }
    return popupMoreProps
  }
  render() {
    const {
      children,
      value = [],
      loading,
      popupPrefixCls,
      itemStyle,
      indicatorStyle,
      okText,
      dismissText,
      extra,
      cascade,
      prefixCls,
      pickerPrefixCls,
      data,
      cols,
      onOk,
      ...restProps
    } = this.props;
    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(this.props, this.context, 'Picker', () =>
      require('./locale/zh_CN'),
    );
    let popupMoreProps = this.getPopupMoreProps()
    const cascader = this.renderCascader()
    return (
      <RMCPopupCascader
        cascader={cascader}
        {...this.popupProps}
        {...restProps}
        prefixCls={popupPrefixCls}
        value={value}
        dismissText={dismissText || _locale.dismissText}
        okText={okText || _locale.okText}
        {...popupMoreProps}
        ref={this.fixOnOk}
        onVisibleChange={this.onVisibleChange}
      >
        {children &&
          typeof children !== 'string' &&
          React.isValidElement(children) &&
          React.cloneElement<object, object>(children, {
            extra: this.getSel() || extra || _locale.extra,
          })}
      </RMCPopupCascader>
    );
  }
}
