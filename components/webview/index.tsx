/**
 * 根据 html 自动设置高度
 * 参考: https://github.com/scazzy/react-native-webview-autoheight
 *
 * @prop source: Same as WebView
 * @prop autoHeight: true|false
 * @prop defaultHeight: 100
 * @prop width: device Width
 * @prop ...props
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Dimensions, WebView as RNWebView } from 'react-native'

const injectedScript = function () {
    function waitForBridge() {
        if (window.postMessage.length !== 1) {
            setTimeout(waitForBridge, 200)
        }
        else {
            let webClientHeight = 0
            if (document.documentElement.clientHeight > document.body.clientHeight) {
                webClientHeight = document.documentElement.clientHeight
            }
            else {
                webClientHeight = document.body.clientHeight
            }
            if (webClientHeight > 0) {
                postMessage(JSON.stringify({
                    webClientHeight,
                }))
            }
        }
    }

    waitForBridge()
}

@observer
export default class WebView extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        width: PropTypes.number,
        defaultHeight: PropTypes.number.isRequired,
        autoHeight: PropTypes.bool,
        scrollEnabled: PropTypes.bool,
    }

    static defaultProps = {
        autoHeight: true,
        width: Dimensions.get('window').width,
        scrollEnabled: false,
    }
    _onMessage = (e) => {
        try {
            const data = JSON.parse(e.nativeEvent.data)
            if (data && data.webClientHeight) {
                this.setState({
                    webViewHeight: parseInt(data.webClientHeight),
                })
            }
        } catch (e) {
            // 出错,使用默认值
            const { defaultHeight } = this.props
            this.setState({
                webViewHeight: defaultHeight,
            })
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            webViewHeight: this.props.defaultHeight,
        }
    }

    render() {
        const {
            style,
            children,
            width,
            autoHeight,
            defaultHeight,
            scrollEnabled,
            ...others,
        } = this.props
        const _w = width
        const _h = autoHeight ? this.state.webViewHeight : defaultHeight
        return (
            <RNWebView
                style={[{ width: _w }, style, { height: _h }]}
                injectedJavaScript={'(' + String(injectedScript) + ')();'}
                scrollEnabled={scrollEnabled}
                onMessage={this._onMessage}
                {...others}
            >
                {children}
            </RNWebView>
        )
    }
}
