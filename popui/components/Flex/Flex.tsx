import PropTypes from 'prop-types'
import React from 'react'
import { View, ViewPropTypes } from 'react-native'

const Flex = ({ direction = 'row', wrap = 'wrap', style, children, ...others }) =>
    <View
        style={[{
            flexDirection: direction,
            flexWrap: wrap,
        }, style]}
        {...others}
    >{children}</View>

Flex.propTypes = {
    direction: PropTypes.oneOf(['row', 'column']),
    wrap: PropTypes.oneOf(['wrap', 'nowrap']),
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default Flex
