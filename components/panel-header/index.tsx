// import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import {PanelHeaderPropsType} from './PropsType';

const styles = StyleSheet.create({
    panelHeader: {
        paddingTop: 14,
        paddingRight: 15,
        paddingBottom: 10,
        marginLeft: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: themeVars.LineColorLight,
    },
    panelHeaderText: {
        color: themeVars.TextColorGray,
        fontSize: 13,
    },
})

const PanelHeader = ({ children, style, textStyle, ...others }:PanelHeaderPropsType) =>
    <View style={[styles.panelHeader, style]} {...others}>
        <Text style={[styles.panelHeaderText, textStyle]}>{children}</Text>
    </View>

// PanelHeader.propTypes = {
//     children: PropTypes.node,
//     style: ViewPropTypes.style,
//     textStyle: Text.propTypes.style,
// }

export default observer(PanelHeader)
