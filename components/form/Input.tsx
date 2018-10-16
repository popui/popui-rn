import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
    input: {
        fontSize: varibles.CellFontSize,
        height: varibles.CellLineHeight,
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
