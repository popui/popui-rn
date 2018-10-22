import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, Text, TouchableOpacity, ViewPropTypes } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;

const TextFontSize = 14
const styles = StyleSheet.create({
    footerLinkContainer: {
        marginLeft: 0.64 * TextFontSize,
        marginRight: 0.64 * TextFontSize,
    },
    footerLinkText: {
        color: themeVars.LinkColorDefault,
        fontSize: TextFontSize,
    },
})

const FooterLink = props => {
    const { children, style, ...others } = props
    return (
        <TouchableOpacity style={[styles.footerLinkContainer, style]} activeOpacity={0.} {...others}>
            <Text style={styles.footerLinkText}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

FooterLink.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
    others: PropTypes.object,
}

export default observer(FooterLink)