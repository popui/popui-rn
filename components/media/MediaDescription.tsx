import PropTypes from 'prop-types'
import React from 'react'
import { Text, ViewPropTypes } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import variables from '../style/themes/default'

const styles = create({
    mediaDesc: {
        fontSize: 13,
        color: variables.TextColorGray,
        lineHeight: 13 * 1.2,
        android: {
            lineHeight: Math.round(13 * 1.2),
        },
    },
})

const MediaDescription = ({ style, children, ...others }) =>
    <Text style={[styles.mediaDesc, style]} numberOfLines={2} {...others}>
        {children}
    </Text>

MediaDescription.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
}

export default MediaDescription
