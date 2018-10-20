import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import variables from '../style/themes/default'

const styles = StyleSheet.create({
    formPreviewItem: {
        overflow: 'hidden',
        flexDirection: 'row',
    },
    bodyPreviewLabel: {
        marginRight: variables.baseFontSize * 0.9,
        fontSize: variables.baseFontSize * 0.9,
        lineHeight: variables.baseFontSize * 0.9 * 2,
    },
    bodyPreviewValue: {
        fontSize: variables.baseFontSize * 0.9,
        lineHeight: variables.baseFontSize * 0.9 * 2,
        color: variables.TextColorGray,
    },
    headerPreviewLabel: {
        marginRight: variables.baseFontSize,
        fontSize: variables.baseFontSize,
        lineHeight: variables.baseFontSize * 2.5,
    },
    headerPreviewValue: {
        fontSize: variables.baseFontSize * 1.6,
        lineHeight: variables.baseFontSize * 2.5,
        fontStyle: 'normal',
    },
})

const PreviewItem = ({ style, children, preset = 'body', ...others }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (child.type.name === 'PreviewLabel') {
            return React.cloneElement(child, { style: [child.props.style, styles[`${preset}PreviewLabel`]] })
        }
        if (child.type.name === 'PreviewValue') {
            return React.cloneElement(child, { style: [child.props.style, styles[`${preset}PreviewValue`]] })
        }
        return child
    })

    return (
        <View style={[styles.formPreviewItem, style]} {...others}>{childrenWithProps}</View>
    )
}

PreviewItem.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
    preset: PropTypes.string,
}

export default PreviewItem
