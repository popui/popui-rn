import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import V from '../style/themes/weui'

const baseFontSize = 14
const lineHeight = baseFontSize * V.baseLineHeight
const styles = create({
    h3: {
        lineHeight,
        fontSize: baseFontSize,
        fontWeight: '400',
        android: {
            lineHeight: Math.round(lineHeight),
        },
    },
})

const H3 = ({ style, children }) =>
    <Text style={[styles.h3, style]}>
        {children}
    </Text>

H3.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
}

export default H3
