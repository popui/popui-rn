import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import variables from '../style/themes/default'

const styles = StyleSheet.create({
    cellText: {
        fontSize: themeVars.CellFontSize,
        marginTop: (themeVars.CellLineHeight - themeVars.CellFontSize) / 2,
        marginBottom: (themeVars.CellLineHeight - themeVars.CellFontSize) / 2,
    },
})

const CellText = ({ children, style, ...others }) =>
    <Text style={[styles.cellText, style]} {...others}>{children}</Text>

CellText.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellText
