import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    gridLabel: {
        textAlign: 'center',
        fontSize: V.GridFontSize,
        color: V.TextColorTitle,
        marginTop: 5,
    },
})

const GridLabel = ({ children, style, ...others }) =>
    <Text style={[styles.gridLabel, style]} {...others}>{children}</Text>

GridLabel.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
}

export default GridLabel
