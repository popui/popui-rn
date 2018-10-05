import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'

const styles = StyleSheet.create({
    panel: {
        backgroundColor: '#fff',
        marginTop: 10,
        overflow: 'hidden',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: V.LineColorLight,
    },
})

const Panel = ({ children, style, ...others }) =>
    <View style={[styles.panel, style]} {...others} >
        {children}
    </View>

Panel.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
}

export default Panel
