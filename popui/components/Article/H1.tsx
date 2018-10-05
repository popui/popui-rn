import PropTypes from 'prop-types'
import React from 'react'
import { Text, ViewPropTypes } from 'react-native'
import { create } from 'popui/components/StyleSheet'
import V from 'popui/theme/ThemeVariables'

const styles = create({
    h1: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 18 * 0.9,
        lineHeight: 18 * V.baseLineHeight,
        android: {
            lineHeight: Math.round(18 * V.baseLineHeight),
        },
    },
})

const H1 = ({ style, children }) =>
    <Text style={[styles.h1, style]}>
        {children}
    </Text>

H1.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
}

export default H1
