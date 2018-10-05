import PropTypes from 'prop-types'
import React from 'react'
import { View as RNView, ViewPropTypes } from 'react-native'

const View = ({ style, children, ...others }) => {
    return (
        <RNView style={style} {...others}>{children}</RNView>
    )
}

View.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default View
