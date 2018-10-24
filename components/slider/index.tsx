import React from 'react';

import { Slider as RNSlider, View, Text } from 'react-native';
import { SliderPropsType } from './PropsType';
import SliderStyle from './style/index';

export interface SliderProps extends SliderPropsType {
  maximumTrackTintColor?: string;
  minimumTrackTintColor?: string;
}


export default class SliderAntm extends React.Component<SliderProps, any> {
  static defaultProps = {
    onChange() { },
    value:0,
    showValue: true,
    onAfterChange() { },
    defaultValue: 0,
    disabled: false,
    maximumTrackTintColor: SliderStyle.maximum.color,
    minimumTrackTintColor: SliderStyle.minimum.color,
    style: undefined,
    sliderStyle: undefined,
    textStyle: undefined
  };
  renderValue =()=>{
    const {
      value,
      textStyle,
    } = this.props;
    return (<Text style={[SliderStyle.sliderText, textStyle]}>
      {value}</Text>)
  }
  render() {
    const {
      defaultValue,
      showValue,
      value,
      min,
      max,
      step,
      disabled,
      onChange,
      onAfterChange,
      maximumTrackTintColor,
      minimumTrackTintColor,
      style,
      sliderStyle,
      textStyle,
      ...others
    } = this.props;
    console.log('SliderAntm render',{
      
    })
    return (
      <View style={[SliderStyle.sliderWrapper, style]}>
        <RNSlider
          value={defaultValue || value}
          minimumValue={min}
          maximumValue={max}
          step={step}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
          disabled={disabled}
          onValueChange={onChange}
          onSlidingComplete={onAfterChange}
          style={[SliderStyle.slider, sliderStyle]}
          {...others}
        />
        {showValue && this.renderValue()}
      </View>
    );
  }
}
