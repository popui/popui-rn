import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
    mediaHeader: {
        marginRight: varibles.baseFontSize * 0.8,
        width: 60,
        height: 60,
    },
    mediaAppmsgThumb: {
        width: 60,
        height: 60,
    },
})

const MediaHeader = ({ style, children, ...others }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (child.type.displayName === 'Image' && !child.props.style) {
            return React.cloneElement(child, { style: [styles.mediaAppmsgThumb, child.props.style] })
        }
        return child
    })

    return (
        <View style={[styles.mediaHeader, style]} {...others}>{childrenWithProps}</View>
    )
}

MediaHeader.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default MediaHeader
