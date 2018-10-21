// import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import {PreviewBodyPropsType} from './PropsType';
const styles = StyleSheet.create({
    previewBody: {
        paddingTop: themeVars.CellGapV,
        paddingBottom: themeVars.CellGapV,
        paddingLeft: themeVars.CellGapH,
        paddingRight: themeVars.CellGapH,
    },
})

const PreviewBody = ({ style, children, ...other }:PreviewBodyPropsType) => {
    const childrenWithProps = React.Children.map(children, (child:any) => {
      if (child.type.name === 'PreviewItem') {
            return React.cloneElement(child, { preset: 'body' })
        }
        return child
    })

    return (
        <View style={[styles.previewBody, style]} {...other}>{childrenWithProps}</View>
    )
}

// PreviewBody.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
// }

export default PreviewBody
