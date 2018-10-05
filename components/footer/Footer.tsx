import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    footerlink: {
        // backgroundColor: '#fbf9fe',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export interface IFooterProps {
    children?: any,
    style?: any
    [prop: string]: any
}

const Footer = (props: IFooterProps) => {
    const { children, style, ...others } = props
    return (
        <View style={[styles.footerlink, style]} {...others} >
            {children}
        </View>
    )
}


export default Footer
