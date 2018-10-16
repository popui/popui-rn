import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
    previewFooter: {
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: varibles.DialogLineColor,
    },
})

const PreviewFooter = ({ style, children, ...other }) =>
    <View style={[styles.previewFooter, style]} {...other}>{children}</View>

PreviewFooter.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default PreviewFooter
