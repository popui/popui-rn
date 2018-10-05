import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'

const styles = StyleSheet.create({
    previewFooter: {
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.DialogLineColor,
    },
})

const PreviewFooter = ({ style, children, ...other }) =>
    <View style={[styles.previewFooter, style]} {...other}>{children}</View>

PreviewFooter.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default PreviewFooter
