// import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, Text } from 'react-native'
import {PreviewValuePropsType} from './PropsType';

const styles = StyleSheet.create({
    formPreviewValue: {
        flex: 1,
        textAlign: 'right',
        fontStyle: 'italic',
    },
})

const PreviewValue = ({ style, children, ...others }:PreviewValuePropsType) =>
    <Text style={[styles.formPreviewValue, style]} {...others}>{children}</Text>

// PreviewValue.propTypes = {
//     style: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default PreviewValue
