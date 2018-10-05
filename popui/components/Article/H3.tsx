import PropTypes from 'prop-types'
import React from 'react'
import { Text, ViewPropTypes } from 'react-native'
import { create } from 'popui/components/StyleSheet'
import V from '../style/themes/weui'

const styles = create({
    h3: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 15 * V.baseLineHeight,
        android: {
            lineHeight: Math.round(15 * V.baseLineHeight),
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
