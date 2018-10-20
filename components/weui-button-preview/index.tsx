// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text} from 'react-native'
import variables from '../style/themes/default'
import TouchableWithFallback from '../touchable-with-fallback'
import {ButtonPreviewPropsType} from './PropsType'

const styles = StyleSheet.create({
    previewBtn: {
        flex: 1,
        alignSelf: 'center',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: variables.DialogLineColor,
    },

    previewBtnText: {
        textAlign: 'center',
        color: variables.DialogLinkColor,
        lineHeight: 50,
        fontSize: variables.baseFontSize,
    },
    previewBtnDefaultText: {
        color: variables.TextColorGray,
    },
    previewBtnPrimaryText: {
        color: '#0BB20C',
    },
})

const ButtonPreview = ({ primary, style, textStyle, children, ...others }:ButtonPreviewPropsType) =>
    <TouchableWithFallback underlayColor={variables.DialogLinkActiveBc} style={[styles.previewBtn, style]}>
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

// ButtonPreview.propTypes = {
//     primary: PropTypes.bool,
//     style: TouchableHighlight.propTypes.style,
//     textStyle: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default ButtonPreview
