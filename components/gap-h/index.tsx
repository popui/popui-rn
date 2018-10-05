import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'

export interface IProps {
    level?: number // 1-10
    style?: any
}

function HGap(props: IProps) {
    const { level = 5, style, children, ...others } = props
    return (<View
        style={[styles[`level${level}`], style]}
        {...others}
    >{children}</View>)
}

const styles = StyleSheet.create({
    level1: {
        marginTop: StyleSheet.hairlineWidth,
    },
    level2: {
        marginTop: 6,
    },
    level3: {
        marginTop: 9,
    },
    level4: {
        marginTop: 12,
    },
    level5: {
        marginTop: 15,
    },
    level6: {
        marginTop: 18,
    },
    level7: {
        marginTop: 25,
    },
    level8: {
        marginTop: 30,
    },
    level9: {
        marginTop: 36,
    },
    level10: {
        marginTop: 42,
    },
    level11: {
        marginTop: 50,
    },
    level12: {
        marginTop: 60,
    },
})

export default HGap
