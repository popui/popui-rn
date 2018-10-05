import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextInput, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    input: {
        fontSize: V.CellFontSize,
        height: V.CellLineHeight,
    },
})

const Input = ({ value, onChange, disabled = false, style, ...others }) =>
    <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChange}
        editable={!disabled}
        {...others}
    />

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    style: TextInput.propTypes.style,
}

export default Input
