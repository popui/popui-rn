import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    gridIcon: {
        width: V.GridIconSize,
        height: V.GridIconSize,
        alignSelf: 'center',
    },
})

const GridIcon = ({ children, style, ...others }) =>
    <View style={[styles.gridIcon, style]} {...others}>{children}</View>

GridIcon.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
}

export default GridIcon
