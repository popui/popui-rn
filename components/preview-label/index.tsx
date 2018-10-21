// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import variables from '../style/themes/default'
import {PreviewLabelPropsType} from './PropsType';

const styles = StyleSheet.create({
    formPreviewLabel: {
        textAlign: 'justify',
        color: themeVars.TextColorGray,
    },
})

const PreviewLabel = ({ style, children, ...others }:PreviewLabelPropsType) =>
    <Text style={[styles.formPreviewLabel, style]} {...others}>{children}</Text>

// PreviewLabel.propTypes = {
//     style: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default PreviewLabel
