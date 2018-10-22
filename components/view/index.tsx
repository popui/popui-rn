// import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { View as RNView } from 'react-native'

const View = ({ style, children, ...others }:any) => {
    return (
        <RNView style={style} {...others}>{children}</RNView>
    )
}

// View.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
// }

export default observer(View)
