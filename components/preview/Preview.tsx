import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
    preview: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: varibles.CellBorderColor,
    },
})

const Preview = ({ style, children, ...other }) =>
    <View style={[styles.preview, style]} {...other}>{children}</View>

Preview.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default Preview
