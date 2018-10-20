import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import variables from '../style/themes/default'

const styles = StyleSheet.create({
    previewBody: {
        paddingTop: variables.CellGapV,
        paddingBottom: variables.CellGapV,
        paddingLeft: variables.CellGapH,
        paddingRight: variables.CellGapH,
    },
})

const PreviewBody = ({ style, children, ...other }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (child.type.name === 'PreviewItem') {
            return React.cloneElement(child, { preset: 'body' })
        }
        return child
    })

    return (
        <View style={[styles.previewBody, style]} {...other}>{childrenWithProps}</View>
    )
}

PreviewBody.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default PreviewBody
