import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
    cellText: {
        fontSize: varibles.CellFontSize,
        marginTop: (varibles.CellLineHeight - varibles.CellFontSize) / 2,
        marginBottom: (varibles.CellLineHeight - varibles.CellFontSize) / 2,
    },
})

const CellText = ({ children, style, ...others }) =>
    <Text style={[styles.cellText, style]} {...others}>{children}</Text>

CellText.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellText
