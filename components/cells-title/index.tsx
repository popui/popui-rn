import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
    cellsTitle: {
        marginTop: (varibles.CellTipsFontSize * 0.77) + (((14 * varibles.baseLineHeight) - 14) * 0.5),
        marginBottom: (varibles.CellTipsFontSize * 0.3) + (((14 * varibles.baseLineHeight) - 14) * 0.5),
        paddingLeft: varibles.CellGapH,
        paddingRight: varibles.CellGapH,
        fontSize: varibles.CellTipsFontSize,
        color: varibles.TextColorGray,
    },
})

const CellsTitle = ({ children, style, ...others }) =>
    <Text style={[styles.cellsTitle, style]} {...others}>{children}</Text>

CellsTitle.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellsTitle
