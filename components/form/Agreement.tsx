import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native'
import IconWeui from '../icon-weui'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    agreement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 13 * 0.5,
        paddingBottom: 13 * 0.5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    agreementText: {
        fontSize: 13,
        color: V.TextColorGray,
        marginLeft: 5,
    },
    checkbox: {
        height: 13,
        width: 13,
        borderRadius: 3,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#D1D1D1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabled: {
        backgroundColor: '#E1E1E1',
    },
})

const Agreement = ({ value = false, onChange, disabled, style, textStyle, children, ...others }) =>
    <TouchableWithoutFeedback {...(disabled ? {} : { onPress: () => onChange(!value) })} {...others}>
        <View style={[styles.agreement, style]}>
            <View style={[styles.checkbox, disabled ? styles.disabled : null]}>
                {value
                    ? <IconWeui name="success_no_circle" size={10} {...(disabled ? { color: '#ADADAD' } : {})} />
                    : false
                }
            </View>
            <Text style={[styles.agreementText, textStyle]}>{children}</Text>
        </View>
    </TouchableWithoutFeedback>

Agreement.propTypes = {
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    children: PropTypes.node,
}

export default Agreement
