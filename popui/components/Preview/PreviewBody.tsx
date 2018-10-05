import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import V from 'popui/theme/ThemeVariables'

const styles = StyleSheet.create({
    previewBody: {
        paddingTop: V.CellGapV,
        paddingBottom: V.CellGapV,
        paddingLeft: V.CellGapH,
        paddingRight: V.CellGapH,
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
