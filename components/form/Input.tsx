import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { themeStore } from '../theme-store'
const { themeVars } = themeStore

const styles = StyleSheet.create({
  input: {
    fontSize: themeVars.CellFontSize,
    height: themeVars.CellLineHeight,
  },
})

const Input = ({ value, onChange, disabled = false, style, ...others }) => (
  <TextInput
    style={[styles.input, style]}
    value={value}
    onChangeText={onChange}
    editable={!disabled}
    {...others}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: TextInput.propTypes.style,
}

export default Input
