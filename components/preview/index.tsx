// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import variables from '../style/themes/default'
import {PreviewPropsType} from './PropsType';
const styles = StyleSheet.create({
    preview: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: variables.CellBorderColor,
    },
})

const Preview = ({ style, children, ...other }:PreviewPropsType) =>
    <View style={[styles.preview, style]} {...other}>{children}</View>

// Preview.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
// }

export default Preview
