import PropTypes from 'prop-types'
import React from 'react'
import { Dimensions, StyleSheet, TouchableHighlight, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'
import GridIcon from './GridIcon'
import GridLabel from './GridLabel'
import TouchableWithFallback from '../touchable-with-fallback'

const styles = StyleSheet.create({
    grid: {
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: V.GridBorderColor,
        width: (Dimensions.get('window').width - StyleSheet.hairlineWidth) / 3,
        height: 87,
    },
})

const Grid = ({ children, icon = false, label = '', style, ...others }) =>
    <TouchableWithFallback
        style={[styles.grid, style]}
        underlayColor={V.BgColorActive}
        {...others}
    >
        <View>
            {icon ? <GridIcon>{icon}</GridIcon> : false}
            {children}
            {label ? <GridLabel>{label}</GridLabel> : false}
        </View>
    </TouchableWithFallback>

Grid.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.any,
    style: TouchableHighlight.propTypes.style,
    children: PropTypes.node,
}

export default Grid
