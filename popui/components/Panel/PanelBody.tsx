import PropTypes from 'prop-types'
import React from 'react'
import { View, ViewPropTypes } from 'react-native'

const PanelBody = ({ children, style, ...others }) => {
    const childrenWithProps = React.Children.map(children, (child, idx) => {
        if (idx === 0) {
            return React.cloneElement(child, { first: true })
        }
        return child
    })

    return (
        <View style={style} {...others}>
            {childrenWithProps}
        </View>
    )
}

PanelBody.propTypes = {
    children: PropTypes.node,
    style: ViewPropTypes.style,
}

export default PanelBody
