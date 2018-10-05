import React from 'react'
import { Button, ButtonArea, PageWrapper, Toast } from 'popui'
import stylekit from 'react-native-stylekit'
import { NavigationScreenProps } from 'react-navigation'

const $SK = stylekit({})


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class ToastScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Toast',
    }

    constructor(props) {
        super(props)
        this.state = {
            visibleToast: false,
            visibleLoading: false,
            toastTimer: null,
            loadingTimer: null,
        }
        this.showToast = this.showToast.bind(this)
        this.showLoadingToast = this.showLoadingToast.bind(this)
    }

    componentWillUnmount() {
        if (this.state.toastTimer) {
            clearTimeout(this.state.toastTimer)
        }
        if (this.state.loadingTimer) {
            clearTimeout(this.state.loadingTimer)
        }
    }

    showToast() {
        this.setState({ visibleToast: true })
        this.state.toastTimer = setTimeout(() => {
            this.setState({ visibleToast: false })
        },                                 2000)
    }

    showLoadingToast() {
        this.setState({ visibleLoading: true })
        this.state.loadingTimer = setTimeout(() => {
            this.setState({ visibleLoading: false })
        },                                   2000)
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal>
                <ButtonArea style={{ paddingTop: 20 }}>
                    <Button onPress={this.showToast}>点击弹出 Toast</Button>
                    <Button
                        onPress={this.showLoadingToast}
                        style={$SK.mt15}
                    >点击弹出 Loading Toast</Button>
                </ButtonArea>
                <Toast icon="success_no_circle" show={this.state.visibleToast}>加载成功</Toast>
                <Toast icon="loading" show={this.state.visibleLoading}>加载中...</Toast>
            </PageWrapper>
        )
    }
}
