import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
    previewHeader: {
        paddingTop: V.CellGapV,
        paddingBottom: V.CellGapV,
        paddingRight: V.CellGapH,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: V.CellBorderColor,
        marginLeft: V.CellGapH,
    },
})

const PreviewHeader = ({ style, children, ...other }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (child.type.name === 'PreviewItem') {
            return React.cloneElement(child, { preset: 'header' })
        }
        return child
    })

    return (
        <View style={[styles.previewHeader, style]} {...other}>{childrenWithProps}</View>
    )
}

PreviewHeader.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default PreviewHeader
