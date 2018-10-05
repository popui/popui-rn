import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'

const styles = StyleSheet.create({
    formPreviewValue: {
        flex: 1,
        textAlign: 'right',
        fontStyle: 'italic',
    },
})

const PreviewValue = ({ style, children, ...others }) =>
    <Text style={[styles.formPreviewValue, style]} {...others}>{children}</Text>

PreviewValue.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
}

export default PreviewValue
