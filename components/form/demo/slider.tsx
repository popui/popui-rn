import React from 'react'
import { Image, Text,ScrollView } from 'react-native'
import Slider from 'popui-rn/components/form/Slider';

export interface IProps  {

}

export default class SliderScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Slider',
    }

    private constructor() {
        super()
        this.state = {
            sliderValue: 5,
        }

        this.handleSliderChange = this.handleSliderChange.bind(this)
    }

    render() {
        return (
            <ScrollView>
                <Slider
                    max={100}
                    min={0}
                    value={0}
                    defaultValue={0}
                    disabled={true}
                />
                <Slider
                    value={this.state.sliderValue}
                    onChange={this.handleSliderChange}
                />
            </ScrollView>
        )
    }

    private handleSliderChange(value) {
        this.setState({ sliderValue: value })
    }
}
