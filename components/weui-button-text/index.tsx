// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { themeStore } from '../theme-store'
const { themeVars } = themeStore
import { WeuiButtonTextPropsType } from './PropsType'

const styles = StyleSheet.create({
  text: {
    fontSize: themeVars.BtnFontSize,
    textAlign: 'center',
    marginTop: (themeVars.BtnHeight - themeVars.BtnFontSize) / 2,
    marginBottom: (themeVars.BtnHeight - themeVars.BtnFontSize) / 2,
  },

  miniText: {
    fontSize: themeVars.BtnMiniFontSize,
    marginTop:
      (themeVars.BtnMiniHeight * themeVars.BtnMiniFontSize -
        themeVars.BtnMiniFontSize) /
      2,
    marginBottom:
      (themeVars.BtnMiniHeight * themeVars.BtnMiniFontSize -
        themeVars.BtnMiniFontSize) /
      2,
  },

  // primary
  primaryText: {
    color: themeVars.BtnFontColor,
  },

  // warn
  warnText: {
    color: themeVars.BtnFontColor,
  },

  // default
  defaultText: {
    color: themeVars.BtnDefaultFontColor,
  },

  // primaryPlain
  primaryPlainText: {
    color: themeVars.BtnPlainPrimaryColor,
  },

  // defaultPlain
  defaultPlainText: {
    color: themeVars.BtnPlainDefaultColor,
  },

  // disabled
  disabledText: {
    color: themeVars.BtnDisabledFontColor,
  },

  defaultDisabledText: {
    color: themeVars.BtnDefaultDisabledFontColor,
  },

  plainDisabledText: {
    color: 'rgba(0,0,0,.2)',
  },
})

const getTextStyles = ({ type, plain, size, disabled }) => {
  const config = [styles[`${type}Text`]]
  if (plain) {
    config.push(styles[`${type}PlainText`])
  }
  if (size === 'small') {
    config.push(styles.miniText)
  }
  if (disabled) {
    if (type === 'default') {
      config.push(styles.defaultDisabledText)
    } else {
      config.push(styles.disabledText)
    }
  }
  if (disabled && plain) {
    config.push(styles.plainDisabledText)
  }
  return config
}

const WeuiButtonText = (props: WeuiButtonTextPropsType) => {
  const {
    disabled = false,
    type = 'default',
    size,
    plain = false,
    style,
    children,
    mainColor,
  } = props
  const textStyles = getTextStyles({ type, plain, size, disabled })
  // if(mainColor){
  //     textStyles.push({
  //         color:mainColor
  //     })
  // }
  return <Text style={[styles.text, ...textStyles, style]}>{children}</Text>
}

// WeuiButtonText.propTypes = {
//     type: PropTypes.oneOf(['default', 'primary', 'warn']),
//     size: PropTypes.oneOf(['small']),
//     plain: PropTypes.bool,
//     disabled: PropTypes.bool,
//     style: Text.propTypes.style,
//     children: PropTypes.node,
// }

export default WeuiButtonText
