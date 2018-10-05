import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'

export interface IProps {
    level?: number // 1-10
    style?: any
}

function VGap(props: IProps) {
    const { level = 5, style, children, ...others } = props
    return (<View
        style={[styles[`level${level}`], style]}
        {...others}
    >{children}</View>)
}

const styles = StyleSheet.create({
    level1: {
        marginLeft: StyleSheet.hairlineWidth,
    },
    level2: {
        marginLeft: 6,
    },
    level3: {
        marginLeft: 9,
    },
    level4: {
        marginLeft: 12,
    },
    level5: {
        marginLeft: 15,
    },
    level6: {
        marginLeft: 18,
    },
    level7: {
        marginLeft: 25,
    },
    level8: {
        marginLeft: 30,
    },
    level9: {
        marginLeft: 36,
    },
    level10: {
        marginLeft: 42,
    },
    level11: {
        marginLeft: 50,
    },
    level12: {
        marginLeft: 60,
    },
})

export default VGap
