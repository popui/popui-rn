import React from 'react';
import { Text, View } from 'react-native';
import { Slider } from 'popui-rn';

export default class BasicSliderExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      initialValue:0,
      stepValue: 0.25,
      changingValue: 0.25,
      changedValue: 0.15,
      customColorValue: 0.15,
      minMaxValue: 0,
      slideCompletionCount: 0,
    };
  }

  handleChange = (value: any) => {
    this.setState({
      changingValue: value,
    });
  }

  onAfterChange = (value: any) => {
    this.setState({
      changedValue: value,
    });
  }

  minMaxChange = (value: any) => {
    this.setState({
      minMaxValue: value,
    });
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 20 }}>
          <Text>Initial value: 0.5</Text>
          <Slider 
            value={this.state.initialValue} 
            onAfterChange={(value: any) => this.setState({
              initialValue: value
            })}
            />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>min: 0, max: 1, current Value: {this.state.minMaxValue}</Text>
          <Slider
            min={0}
            max={1}
            value={this.state.minMaxValue}
            onAfterChange={(value: any) => this.minMaxChange(value)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>step: 0.25</Text>
          <Slider 
            step={0.25} 
            value={this.state.stepValue}
            onAfterChange={(value: any) => this.setState({
              stepValue: value,
            })}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>disabled</Text>
          <Slider disabled value={0.25} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>onChange value: {this.state.changingValue}</Text>
          <Slider
            value={this.state.changingValue}
            onChange={(value: any) => this.handleChange(value)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>onAfterChange value: {this.state.changedValue}</Text>
          <Slider
            value={this.state.changedValue}
            onAfterChange={(value: any) => this.onAfterChange(value)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>custom color: </Text>
          <Slider
            value={this.state.customColorValue}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
            onAfterChange={(value: any) => this.setState({
              customColorValue: value,
            })}
          />
        </View>
      </View>
    );
  }
}
