import React, { PureComponent } from 'react'

import { Animated, StyleSheet, View, ViewStyle } from 'react-native'

import { lightenColor } from 'popui/utils/color/lightenColor'

type AnimationStyle = 'fade' | 'shrink' | 'explode'
type cacheType = 'default' | 'reload' | 'force-cache' | 'only-if-cached'

interface NetworkImage {
    uri: string,
    cache: cacheType,
}

type ImageSource = NetworkImage | number

interface Props {
    animationStyle?: AnimationStyle,
    delay?: number,
    imageKey?: string,
    placeholderColor?: string,
    placeholderSource?: ImageSource,
    source: NetworkImage,
    style: ViewStyle,
}

interface State {
    failed: boolean,
    imageOpacity: Animated.Value,
    loaded: boolean,
    placeholderColorAnimated: Animated.Value,
    placeholderColorLightened: string,
    placeholderOpacity: Animated.Value,
    placeholderScale: Animated.Value,
}

class AnimatedImage extends PureComponent<Props, State> {

    props: Props
    state: State

    private animationStyle: AnimationStyle
    // source
    private renderPlaceHolderSourceView = () => {
        const {
            placeholderSource,
            style,
        } = this.props

        const {
            placeholderOpacity,
        } = this.state

        const placehoderSourceStyles = [
            styles.placehoderSource,
            {
                opacity: placeholderOpacity,
            },
            style,
        ]
        return (<Animated.Image
            {...this.props}
            style={placehoderSourceStyles}
            source={placeholderSource}
        />)
    }
    // color
    private renderPlaceHolderColorView = () => {
        const {
            placeholderColor,
            style,
        } = this.props

        const {
            placeholderColorAnimated,
            placeholderColorLightened,
            placeholderOpacity,
            placeholderScale,
        } = this.state

        const backgroundColor = placeholderColor
            ? placeholderColorAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [
                    placeholderColor,
                    placeholderColorLightened,
                ],
            })
            : 'transparent'

        const placeHolderColorStyles = [
            {
                backgroundColor,
                opacity: placeholderOpacity,
                position: 'absolute',
                transform: [{ scale: placeholderScale }],
            },
            style,
        ]
        return (<Animated.View
            style={placeHolderColorStyles}
        />)
    }
    // 加载完毕
    private renderImage = () => {
        const {
            imageKey,
            source,
            style,
        } = this.props
        // cache
        const { uri, cache } = source
        if (uri && !cache) {
            source.cache = 'only-if-cached'
        }
        const {
            imageOpacity,
        } = this.state
        const imageStyles = [
            {
                opacity: imageOpacity,
                position: 'absolute',
                resizeMode: 'contain',
            },
            style,
        ]
        return (<Animated.Image
            key={imageKey}
            source={source}
            resizeMode={'contain'}
            style={imageStyles}
            onLoad={this.onLoad}
            onError={this.onError}
        />)
    }
    /**
     * 加载失败
     */
    private onError = () => {
        this.setState(() => ({
            failed: true,
        }),           () => {
            // 逐渐停止动画
            Animated.timing(this.state.placeholderColorAnimated, {
                duration: 200,
                toValue: 0.0,
            }).start()
        })
    }
    private onLoad = () => {
        const { delay } = this.props

        const {
            imageOpacity,
            placeholderOpacity,
            placeholderScale,
        } = this.state

        const callback = () => this.setState(() => ({ loaded: true }))

        switch (this.animationStyle) {
            case 'fade':
                return Animated.parallel([
                    // placeholder 透明度降低, 直到完全透明
                    Animated.timing(placeholderOpacity, {
                        delay,
                        duration: 200,
                        toValue: 0,
                    }),
                    // 图片 透明度升高, 直至完全可见
                    Animated.timing(imageOpacity, {
                        delay,
                        duration: 300,
                        toValue: 1,
                    }),
                ]).start(callback)

            case 'shrink':
                return Animated.parallel([
                    Animated.parallel([
                        // placeholder 透明度降低, 直到完全透明
                        Animated.timing(placeholderOpacity, {
                            delay,
                            duration: 200,
                            toValue: 0,
                        }),
                        // placeholder 缩小到0
                        Animated.timing(placeholderScale, {
                            delay,
                            duration: 200,
                            toValue: 0,
                        }),
                    ]),
                    // 图片 透明度升高, 直至完全可见
                    Animated.timing(imageOpacity, {
                        delay,
                        duration: 300,
                        toValue: 1,
                    }),
                ]).start(callback)
            case 'explode':
            default:
                return Animated.sequence([
                    Animated.parallel([
                        Animated.timing(placeholderScale, {
                            delay,
                            duration: 100,
                            toValue: 0.7,
                        }),
                        Animated.timing(placeholderOpacity, {
                            duration: 100,
                            toValue: 0.66,
                        }),
                    ]),
                    Animated.parallel([
                        Animated.parallel([
                            Animated.timing(placeholderOpacity, {
                                duration: 200,
                                toValue: 0,
                            }),
                            Animated.timing(placeholderScale, {
                                duration: 200,
                                toValue: 1.2,
                            }),
                        ]),
                        Animated.timing(imageOpacity, {
                            delay: 200,
                            duration: 300,
                            toValue: 1,
                        }),
                    ]),
                ]).start(callback)
        }
    }
    /**
     * PlaceholderColor 动画
     * 颜色先变深, 再变浅
     */
    private animatePlaceholderColor = () => {
        const {
            failed,
            loaded,
            placeholderColorAnimated,
        } = this.state

        if (failed || loaded) return

        Animated.sequence([
            // 加深
            Animated.timing(placeholderColorAnimated, {
                duration: 500,
                toValue: 1.0,
            }),
            // 变浅
            Animated.timing(placeholderColorAnimated, {
                duration: 400,
                toValue: 0.0,
            }),
        ]).start(this.animatePlaceholderColor)
    }

    constructor(props) {
        super(props)

        if (__DEV__) {
            const style = typeof props.style === 'number'
                ? StyleSheet.flatten(props.style)
                : props.style

            const { width, height } = style
            if (!width || !height) {
                console.warn('AnimatedImage: Width and height should be defined in styles.')
            }
        }

        this.animationStyle = props.placeholderSource
            ? 'fade'
            : props.animationStyle

        // 如果提供了 placeholderColor, 则减弱20
        // 否则为透明
        const placeholderColorLightened = props.placeholderColor
            ? lightenColor(props.placeholderColor, 20)
            : 'transparent'

        this.state = {
            placeholderColorLightened,
            failed: false,  // 是否失败
            imageOpacity: new Animated.Value(0),
            loaded: false, // 加载完毕
            placeholderColorAnimated: new Animated.Value(1.0),
            placeholderOpacity: new Animated.Value(1.0),
            placeholderScale: new Animated.Value(1.0),
        }
    }

    componentDidMount() {
        // 如果 placeholder source 不存在,认为是用 color 模式
        // 启动 Color 动画
        if (!this.props.placeholderSource) {
            this.animatePlaceholderColor()
        }
    }

    render() {
        const {
            placeholderSource,
            style,
        } = this.props

        const {
            failed,
            loaded,
        } = this.state

        return (
            <View style={style}>

                {/* 加载完毕*/}
                {(!failed) && this.renderImage()}
                {/*source*/}
                {(placeholderSource && !loaded) && this.renderPlaceHolderSourceView()}
                {/*color*/}
                {(!placeholderSource && !loaded) && this.renderPlaceHolderColorView()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    placehoderSource: {
        position: 'absolute',
        resizeMode: 'contain',
    },
})

export default AnimatedImage
