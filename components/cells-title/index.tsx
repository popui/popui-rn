import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import variables from '../style/themes/default'

const styles = StyleSheet.create({
    cellsTitle: {
        marginTop: (variables.CellTipsFontSize * 0.77) + (((14 * variables.baseLineHeight) - 14) * 0.5),
        marginBottom: (variables.CellTipsFontSize * 0.3) + (((14 * variables.baseLineHeight) - 14) * 0.5),
        paddingLeft: variables.CellGapH,
        paddingRight: variables.CellGapH,
        fontSize: variables.CellTipsFontSize,
        color: variables.TextColorGray,
    },
})

const CellsTitle = ({ children, style, ...others }) =>
    <Text style={[styles.cellsTitle, style]} {...others}>{children}</Text>

CellsTitle.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellsTitle
