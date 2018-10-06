import React from 'react'
import { ScrollView } from 'react-native'
import { ButtonWeui,  Progress2 as Progress } from 'popui-rn'
const {Button, ButtonArea} = ButtonWeui

import stylekit from 'react-native-stylekit'

const $SK = stylekit({})

export interface IProps  {

}

export default class ProgressScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Progress',
    }

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            timer: null,
            isUploading: false,
        }
        this.start = this.start.bind(this)
        this.pause = this.pause.bind(this)
    }

    componentWillUnmount() {
        if (this.state.timer) {
            clearInterval(this.state.timer)
        }
    }

    start() {
        if (this.state.isUploading) {
            return
        }
        this.state.isUploading = true
        this.upload()
    }

    pause() {
        this.setState({ isUploading: false })
    }

    upload() {
        if (!this.state.isUploading) {
            return
        }
        const newValue = (this.state.value + 1) % 100
        this.setState({
            value: newValue,
        })
        this.state.timer = setTimeout(this.upload.bind(this), 20)
    }

    render() {
        return (
            <ScrollView>
                <Progress value={this.state.value || 0} 
                onCancel={this.pause} style={[$SK.mt15]}/>
                <Progress value={this.state.value || 50} 
                onCancel={this.pause} style={[$SK.mt15]}/>
                <Progress 
                  value={this.state.value || 80} 
                  onCancel={this.pause} 
                  style={[$SK.mt15]}/>
                <ButtonArea style={[$SK.mt15]}>
                    <Button type="primary" onPress={this.start}>上传</Button>
                </ButtonArea>
            </ScrollView>
        )
    }
}
