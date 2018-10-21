// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import {PanelPropsType} from './PropsType';

const styles = StyleSheet.create({
    panel: {
        backgroundColor: '#fff',
        marginTop: 10,
        overflow: 'hidden',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: themeVars.LineColorLight,
    },
})

const Panel = ({ children, style, ...others }:PanelPropsType) =>
    <View style={[styles.panel, style]} {...others} >
        {children}
    </View>

// Panel.propTypes = {
//     children: PropTypes.node,
//     style: ViewPropTypes.style,
// }

export default Panel
