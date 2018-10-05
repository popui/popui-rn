import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Animated, Dimensions, Easing, Modal, StatusBar, StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    toptips: {
        width,
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 5,
        zIndex: 5000,
    },
    primaryToptips: {
        backgroundColor: V.ColorPrimary,
    },
    warnToptips: {
        backgroundColor: V.ColorWarn,
    },
    infoToptips: {
        backgroundColor: V.LinkColorDefault,
    },
    toptipsText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF',
    },
})

class Toptips extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { visible: false, translateY: new Animated.Value(-height) }
        this.handleLayout = this.handleLayout.bind(this)
    }

    public componentWillReceiveProps(nextProp) {
        if (this.props.visible !== nextProp.visible) {
            if (nextProp.visible) {
                this.setState({ visible: true })
                return
            }
            Animated.timing(this.state.translateY, {
                toValue: -this.height,
                duration: 150,
                easing: Easing.easeInOut,
            }).start(() => this.setState({ visible: false }))
        }
    }

    public handleLayout() {
        this.toptips.measure((x, y, w, h) => {
            this.height = h
            this.setState({ translateY: new Animated.Value(-h) })
            Animated.timing(this.state.translateY, {
                toValue: 0,
                duration: 150,
                easing: Easing.easeInOut,
            }).start()
        })
    }

    public render() {
        const { type = 'primary', onShow, onClose, style, textStyle, children } = this.props

        return (
            <Modal
                visible={this.state.visible}
                transparent={!false}
                onShow={onShow}
                onRequestClose={onClose}
            >
                <StatusBar hidden={!false}/>
                <Animated.View
                    style={[styles.toptips, styles[`${type}Toptips`], style, {
                        transform: [{ translateY: this.state.translateY }],
                    }]}
                >
                    <View
                        ref={ref => {
                            this.toptips = ref
                        }}
                        onLayout={this.handleLayout}
                    >
                        <Text numberOfLines={2} style={[styles.toptipsText, textStyle]}>{children}</Text>
                    </View>
                </Animated.View>
            </Modal>
        )
    }
}

Toptips.propTypes = {
    type: PropTypes.oneOf(['primary', 'warn', 'info']),
    visible: PropTypes.bool,
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    children: PropTypes.node,
}

export default Toptips
