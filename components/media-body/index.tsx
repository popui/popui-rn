// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MediaBodyPropsType} from './PropsType';

const styles = StyleSheet.create({
    mediaBody: {
        flex: 1,
    },
})

const MediaBody = ({ style, children, ...others }:MediaBodyPropsType) =>
    <View style={[styles.mediaBody, style]} {...others}>
        {children}
    </View>

// MediaBody.propTypes = {
//     style: ViewPropTypes.style,
//     children: PropTypes.node,
// }

export default MediaBody
