import React from 'react'

import { StyleSheet, Text } from 'react-native'
import theme from '../style/themes/default'
import { ModalBodyPropsType } from './PropsType'
const styles = StyleSheet.create({
  bodyText: {
    color: theme.TextColorGray,
    lineHeight: 19.5, // 15 * 1.3,
    // android: {
    //     lineHeight: Math.round(15 * 1.3),
    // },
    fontSize: 15,
    textAlign: 'center',
  },
})

const DialogBodyText = ({ children, style, ...others }: ModalBodyPropsType) => (
  <Text style={[styles.bodyText, style]} {...others}>
    {children}
  </Text>
)

// CellText.propTypes = {
//     children: PropTypes.node,
//     style: Text.propTypes.style,
// }

export default DialogBodyText
