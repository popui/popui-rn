// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../style/themes/default'
import TouchableWithFallback from '../touchable-with-fallback'
import { WeuiButtonPreviewPropsType } from './PropsType'

const styles = StyleSheet.create({
  previewBtn: {
    flex: 1,
    alignSelf: 'center',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: theme.DialogLineColor,
  },

  previewBtnText: {
    textAlign: 'center',
    color: theme.DialogLinkColor,
    lineHeight: 50,
    fontSize: theme.baseFontSize,
  },
  previewBtnDefaultText: {
    color: theme.TextColorGray,
  },
  previewBtnPrimaryText: {
    color: '#0BB20C',
  },
})

const WeuiButtonPreview = ({
  primary,
  style,
  textStyle,
  children,
  ...others
}: WeuiButtonPreviewPropsType) => (
  <TouchableWithFallback underlayColor={theme.DialogLinkActiveBc}>
    <View style={[styles.previewBtn, style]}>
      <Text
        style={[
          styles.previewBtnText,
          primary ? styles.previewBtnPrimaryText : styles.previewBtnDefaultText,
          textStyle,
        ]}
        {...others}
      >
        {children}
      </Text>
    </View>
  </TouchableWithFallback>
)

// WeuiButtonPreview.propTypes = {
//     primary: PropTypes.bool,
//     style: TouchableHighlight.propTypes.style,
//     textStyle: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default WeuiButtonPreview
