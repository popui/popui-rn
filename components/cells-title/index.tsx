import PropTypes from 'prop-types'
import React from 'react'
;
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;

const styles = StyleSheet.create({
    cellsTitle: {
        marginTop: (themeVars.CellTipsFontSize * 0.77) + (((14 * themeVars.baseLineHeight) - 14) * 0.5),
        marginBottom: (themeVars.CellTipsFontSize * 0.3) + (((14 * themeVars.baseLineHeight) - 14) * 0.5),
        paddingLeft: themeVars.CellGapH,
        paddingRight: themeVars.CellGapH,
        fontSize: themeVars.CellTipsFontSize,
        color: themeVars.TextColorGray,
    },
})

const CellsTitle = ({ children, style, ...others }) =>
    <Text style={[styles.cellsTitle, style]} {...others}>{children}</Text>

CellsTitle.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default CellsTitle
