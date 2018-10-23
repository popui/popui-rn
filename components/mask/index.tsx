import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native'
import { MaskPropsType } from "./PropsType";
const styles = StyleSheet.create({
    mask: {
        flex: 1,
        zIndex: 1000,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center'
    },
})

const Mask = ({ transparent = false, style, onPress, children }:MaskPropsType) =>
    <TouchableWithoutFeedback onPress={onPress}>
        <View
            displayName="Mask"
            style={[styles.mask, { backgroundColor: transparent ? 'transparent' : 'rgba(0,0,0,.6)' }, style]}
        >
            <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
        </View>
    </TouchableWithoutFeedback>

export default observer(Mask)
