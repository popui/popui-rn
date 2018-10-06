import React from 'react'

import { PageWrapper, Slider } from 'popui-rn'


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
            <PageWrapper hasPadddingHorizontal hasPaddingTop>
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
            </PageWrapper>
        )
    }

    private handleSliderChange(value) {
        this.setState({ sliderValue: value })
    }
}
