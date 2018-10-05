import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'

const styles = StyleSheet.create({
    label: {
        width: V.CellLabelWidth,
        fontSize: V.CellFontSize,
        marginTop: (V.CellLineHeight - V.CellFontSize) / 2,
        marginBottom: (V.CellLineHeight - V.CellFontSize) / 2,
    },
})

const Label = ({ style, children, ...others }) =>
    <Text
        style={[styles.label, style]}
        numberOfLines={1}
        {...others}
    >
        {children}
    </Text>

Label.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
}

export default Label
