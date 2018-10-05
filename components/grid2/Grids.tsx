import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/weui'
import Grid from './Grid'

const styles = StyleSheet.create({
    grids: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: V.GridBorderColor,
    },
})

const renderData = data =>
    data.map((item, i) =>
        <Grid key={i} icon={item.icon} label={item.label} {...item} />)

const Grids = ({ children, data = [], style, ...others }) =>
    <View style={[styles.grids, style]} {...others}>
        {data.length > 0 ? renderData(data) : children}
    </View>

Grids.propTypes = {
    data: PropTypes.array,
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

export default Grids
