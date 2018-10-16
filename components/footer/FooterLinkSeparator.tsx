import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import $V from '../style/themes/default'

const styles = StyleSheet.create({
    footerlinkseparator: {
        borderColor: $V.grayColor,
        width: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        height: $V.globalFontSize,
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
