import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'
import TouchableWithFallback from '../touchable-with-fallback'

const styles = StyleSheet.create({
    previewBtn: {
        flex: 1,
        alignSelf: 'center',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: varibles.DialogLineColor,
    },

    previewBtnText: {
        textAlign: 'center',
        color: varibles.DialogLinkColor,
        lineHeight: 50,
        fontSize: varibles.baseFontSize,
    },
    previewBtnDefaultText: {
        color: varibles.TextColorGray,
    },
    previewBtnPrimaryText: {
        color: '#0BB20C',
    },
})

const ButtonPreview = ({ primary, style, textStyle, children, ...others }) =>
    <TouchableWithFallback underlayColor={varibles.DialogLinkActiveBc} style={[styles.previewBtn, style]}>
        <Text
            style={[
                styles.previewBtnText,
                primary ? styles.previewBtnPrimaryText : styles.previewBtnDefaultText,
                textStyle,
            ]} {...others}
        >
            {children}
        </Text>
    </TouchableWithFallback>

ButtonPreview.propTypes = {
    primary: PropTypes.bool,
    style: TouchableHighlight.propTypes.style,
    textStyle: Text.propTypes.style,
    children: PropTypes.node,
}

export default ButtonPreview
