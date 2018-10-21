// import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import {MediaDescriptionPropsType} from './PropsType';

const styles = create({
    mediaDesc: {
        fontSize: 13,
        color: themeVars.TextColorGray,
        lineHeight: 13 * 1.2,
        android: {
            lineHeight: Math.round(13 * 1.2),
        },
    },
})

const MediaDescription = ({ style, children, ...others }:MediaDescriptionPropsType) =>
    <Text style={[styles.mediaDesc, style]} numberOfLines={2} {...others}>
        {children}
    </Text>

// MediaDescription.propTypes = {
//     style: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default MediaDescription
