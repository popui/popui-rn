import React from 'react'
import { StyleSheet, View } from 'react-native'
import variables from '../style/themes/default'
import {ButtonAreaPropsType} from './PropsType'
const styles = StyleSheet.create({
    BtnArea: {
        marginTop: variables.CellsMarginTop,
        marginRight: variables.BtnDefaultGap,
        marginBottom: 16 * 0.3,
        marginLeft: variables.BtnDefaultGap,
    },
    BtnAreaInline: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
})

const ButtonArea = ({ direction = 'vertical', style, children }: ButtonAreaPropsType) => {
    const buttonAreaStyle = [styles.BtnArea]
    if (direction === 'horizontal') {
        buttonAreaStyle.push(styles.BtnAreaInline)
    }
    return <View style={[...buttonAreaStyle, style]}>{children}</View>
}


export default ButtonArea
