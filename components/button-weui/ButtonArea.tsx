import React from 'react'
import { StyleSheet, View } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
    BtnArea: {
        marginTop: varibles.CellsMarginTop,
        marginRight: varibles.BtnDefaultGap,
        marginBottom: 16 * 0.3,
        marginLeft: varibles.BtnDefaultGap,
    },
    BtnAreaInline: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
})

export interface IButtonAreaProps {
    direction: 'horizontal' | 'vertical'
    style: any
    children: any
}

const ButtonArea = ({ direction = 'vertical', style, children }: IButtonAreaProps) => {
    const buttonAreaStyle = [styles.BtnArea]
    if (direction === 'horizontal') {
        buttonAreaStyle.push(styles.BtnAreaInline)
    }
    return <View style={[...buttonAreaStyle, style]}>{children}</View>
}


export default ButtonArea
