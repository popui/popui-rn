import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    panelHeader: {
        paddingTop: 14,
        paddingRight: 15,
        paddingBottom: 10,
        marginLeft: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: V.LineColorLight,
    },
    panelHeaderText: {
        color: V.TextColorGray,
        fontSize: 13,
    },
})

const PanelHeader = ({ children, style, textStyle, ...others }) =>
    <View style={[styles.panelHeader, style]} {...others}>
        <Text style={[styles.panelHeaderText, textStyle]}>{children}</Text>
    </View>

PanelHeader.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
}

export default PanelHeader
