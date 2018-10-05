import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'

const styles = StyleSheet.create({
    footerlinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const FooterLinks = props => {
    const { children, style, ...others } = props
    return (
        <View style={[styles.footerlinks, style]} {...others} >
            {children}
        </View>
    )
}

FooterLinks.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
    others: PropTypes.object,
}

export default FooterLinks
