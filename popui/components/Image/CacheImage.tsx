import PropTypes from 'prop-types'
import React from 'react'
import { Image as RNImage, StyleSheet, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const CacheImage = ({ style, children, ...others }) => {
    const styleObj = StyleSheet.flatten(style)
    const fontSize = styleObj.fontSize || V.baseFontSize
    const lineHeight = styleObj.lineHeight || fontSize * V.baseLineHeight

    return (
        <RNImage style={[style, { fontSize, lineHeight }]} {...others}>{children}</RNImage>
    )
}

CacheImage.propTypes = {
    style: RNImage.propTypes.style,
    children: PropTypes.node,
}

export default CacheImage
