import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;

const styles = StyleSheet.create({
    cellHeader: {
        marginRight: 5,
    },
    image: {
        width: 24,
        height: 24,
    },
    error: {
        color: themeVars.ColorWarn,
    },
})

const CellHeader = ({ error, children, style, ...others }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (child.type.displayName === 'Image' && !child.props.style) {
            return React.cloneElement(child, { style: [styles.image, child.props.style] })
        }
        if (error && child.type.name === 'Label') {
            return React.cloneElement(child, { style: [child.props.style, styles.error] })
        }
        return child
    })

    return <View style={[styles.cellHeader, style]} {...others}>{childrenWithProps}</View>
}

CellHeader.propTypes = {
    error: PropTypes.bool,
    children: PropTypes.node,
    style: ViewPropTypes.style,
}

export default CellHeader
