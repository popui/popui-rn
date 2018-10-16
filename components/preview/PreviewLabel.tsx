import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import V from '../style/themes/default'

const styles = StyleSheet.create({
    formPreviewLabel: {
        textAlign: 'justify',
        color: V.TextColorGray,
    },
})

const PreviewLabel = ({ style, children, ...others }) =>
    <Text style={[styles.formPreviewLabel, style]} {...others}>{children}</Text>

PreviewLabel.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
}

export default PreviewLabel
