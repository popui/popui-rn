import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'
import TouchableWithFallback from 'popui/components/Touchable/TouchableWithFallback'

const styles = StyleSheet.create({
    previewBtn: {
        flex: 1,
        alignSelf: 'center',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: V.DialogLineColor,
    },

    previewBtnText: {
        textAlign: 'center',
        color: V.DialogLinkColor,
        lineHeight: 50,
        fontSize: V.baseFontSize,
    },
    previewBtnDefaultText: {
        color: V.TextColorGray,
    },
    previewBtnPrimaryText: {
        color: '#0BB20C',
    },
})

const ButtonPreview = ({ primary, style, textStyle, children, ...others }) =>
    <TouchableWithFallback underlayColor={V.DialogLinkActiveBc} style={[styles.previewBtn, style]}>
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
