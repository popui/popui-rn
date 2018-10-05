import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'

const styles = StyleSheet.create({
    cellsTitle: {
        marginTop: (V.CellTipsFontSize * 0.77) + (((14 * V.baseLineHeight) - 14) * 0.5),
        marginBottom: (V.CellTipsFontSize * 0.3) + (((14 * V.baseLineHeight) - 14) * 0.5),
        paddingLeft: V.CellGapH,
        paddingRight: V.CellGapH,
        fontSize: V.CellTipsFontSize,
        color: V.TextColorGray,
    },
})

const CellsTitle = ({ children, style, ...others }) =>
    <Text style={[styles.cellsTitle, style]} {...others}>{children}</Text>

CellsTitle.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellsTitle
