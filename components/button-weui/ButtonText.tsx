import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import V from '../style/themes/default'

const styles = StyleSheet.create({
    text: {
        fontSize: V.BtnFontSize,
        textAlign: 'center',
        marginTop: (V.BtnHeight - V.BtnFontSize) / 2,
        marginBottom: (V.BtnHeight - V.BtnFontSize) / 2,
    },

    miniText: {
        fontSize: V.BtnMiniFontSize,
        marginTop: ((V.BtnMiniHeight * V.BtnMiniFontSize) - V.BtnMiniFontSize) / 2,
        marginBottom: ((V.BtnMiniHeight * V.BtnMiniFontSize) - V.BtnMiniFontSize) / 2,
    },

    // primary
    primaryText: {
        color: V.BtnFontColor,
    },

    // warn
    warnText: {
        color: V.BtnFontColor,
    },

    // default
    defaultText: {
        color: V.BtnDefaultFontColor,
    },

    // primaryPlain
    primaryPlainText: {
        color: V.BtnPlainPrimaryColor,
    },

    // defaultPlain
    defaultPlainText: {
        color: V.BtnPlainDefaultColor,
    },

    // disabled
    disabledText: {
        color: V.BtnDisabledFontColor,
    },

    defaultDisabledText: {
        color: V.BtnDefaultDisabledFontColor,
    },

    plainDisabledText: {
        color: 'rgba(0,0,0,.2)',
    },
})

const getTextStyles = ({ type, plain, size, disabled }) => {
    const config = [styles[`${type}Text`]]
    if (plain) {
        config.push(styles[`${type}PlainText`])
    }
    if (size === 'small') {
        config.push(styles.miniText)
    }
    if (disabled) {
        if (type === 'default') {
            config.push(styles.defaultDisabledText)
        } else {
            config.push(styles.disabledText)
        }
    }
    if (disabled && plain) {
        config.push(styles.plainDisabledText)
    }
    return config
}

export interface IProps {
    type?: string,
    size?: string,
    plain?: boolean,
    disabled?: boolean,
    style?: any,
    children?: any,
    mainColor?: string,
}

const ButtonText = (props: IProps) => {
    const { disabled = false, type = 'default', size, plain = false, style, children, mainColor } = props
    const textStyles = getTextStyles({ type, plain, size, disabled })
    // if(mainColor){
    //     textStyles.push({
    //         color:mainColor
    //     })
    // }
    return <Text style={[styles.text, ...textStyles, style]}>{children}</Text>
}

ButtonText.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    size: PropTypes.oneOf(['small']),
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    children: PropTypes.node,
}

export default ButtonText
