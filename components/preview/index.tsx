// import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import {PreviewPropsType} from './PropsType';
const styles = StyleSheet.create({
    preview: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: themeVars.CellBorderColor,
    },
})

const Preview = ({ style, children, ...other }:PreviewPropsType) =>
    <View style={[styles.preview, style]} {...other}>{children}</View>

// Preview.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
// }

export default observer(Preview)
