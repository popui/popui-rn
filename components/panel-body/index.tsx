// import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { View } from 'react-native'
import {PanelBodyPropsType} from './PropsType';

const PanelBody = ({ children, style, ...others }:PanelBodyPropsType) => {
    const childrenWithProps = React.Children.map(children, (child:any, idx:number) => {
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

// PanelBody.propTypes = {
//     children: PropTypes.node,
//     style: ViewPropTypes.style,
// }

export default observer(PanelBody)
