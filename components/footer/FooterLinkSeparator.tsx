import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import variables from '../style/themes/default'

const styles = StyleSheet.create({
    footerlinkseparator: {
        borderColor: variables.grayColor,
        width: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        height: variables.globalFontSize,
    },
})

const FooterLinkSeparator = props => {
    const { children, style, ...others } = props
    return (
        <View style={[styles.footerlinkseparator, style]} {...others} >
            {children}
        </View>
    )
}

FooterLinkSeparator.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
    others: PropTypes.object,
}

export default FooterLinkSeparator
