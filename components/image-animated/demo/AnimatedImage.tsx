import React from 'react'


import { AnimatedImage, GapH, LoadMore, PageWrapper } from 'popui-rn'

import { StyleSheet, Text } from 'react-native'

const uri = 'https://i.imgur.com/R5TraVR.png'
const placeholderUri = 'https://i.imgur.com/TSl1zQR.jpg'

const placeholderColor = '#cfd8dc'
const style = {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginVertical: 20,
}

const firstStyle = StyleSheet.create({
    first: style,
})

export interface IProps  {

}

const styles = StyleSheet.create({
    pageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})



export default class AnimatedImageDemoScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'AnimatedImage',
    }

    render() {
        return (
            <PageWrapper style={styles.pageContainer} hasPaddingTop>
                <Text>placeholderSource, 延迟 1s </Text>
                <AnimatedImage
                    delay={1000}
                    source={{ uri }}
                    placeholderSource={{
                        uri: placeholderUri,
                    }}
                    style={style}/>
                <GapH/>

                <Text>placeholderColor, fade, 延迟 2s </Text>
                <AnimatedImage
                    delay={2000}
                    animationStyle={'fade'}
                    source={{ uri }}
                    placeholderColor={placeholderColor}
                    style={style}/>
                <GapH/>

                <Text>placeholderColor, shrink, 延迟 2s </Text>
                <AnimatedImage
                    delay={3000}
                    animationStyle={'shrink'}
                    source={{ uri }}
                    placeholderColor={placeholderColor}
                    style={style}/>
                <GapH/>

                <Text>placeholderColor, explode, 延迟 2s </Text>
                <AnimatedImage
                    delay={4000}
                    animationStyle={'explode'}
                    source={{ uri }}
                    placeholderColor={placeholderColor}
                    style={style}/>
                <GapH/>

            </PageWrapper>
        )
    }
}
