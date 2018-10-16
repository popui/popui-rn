import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import V from '../style/themes/default'

const styles = StyleSheet.create({
    cellText: {
        fontSize: V.CellFontSize,
        marginTop: (V.CellLineHeight - V.CellFontSize) / 2,
        marginBottom: (V.CellLineHeight - V.CellFontSize) / 2,
    },
})

const CellText = ({ children, style, ...others }) =>
    <Text style={[styles.cellText, style]} {...others}>{children}</Text>

CellText.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellText
