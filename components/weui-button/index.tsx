import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
import WeuiButtonText from '../weui-button-text'
import TouchableWithFallback from '../touchable-with-fallback'
import {ButtonPropsType} from './PropsType'

// const Color = require('color')

const styles = StyleSheet.create({
  // global
  button: {
    borderRadius: themeVars.BtnBorderRadius,
    borderWidth: StyleSheet.hairlineWidth,
    paddingLeft: 14,
    paddingRight: 14,
    borderColor: 'rgba(0,0,0,0.2)',
    overflow: 'hidden'
  },

  // mini
  mini: {
    paddingLeft: themeVars.BtnMiniFontSize * 0.75,
    paddingRight: themeVars.BtnMiniFontSize * 0.75
  },

  // primary
  primary: {
    backgroundColor: themeVars.BtnPrimaryBg
  },

  // warn
  warn: {
    backgroundColor: themeVars.BtnWarnBg
  },

  // default
  default: {
    backgroundColor: themeVars.BtnDefaultBg
  },

  // primaryPlain
  primaryPlain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeVars.BtnPlainPrimaryBorderColor,
    backgroundColor: 'transparent'
  },

  // defaultPlain
  defaultPlain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeVars.BtnPlainDefaultBorderColor,
    backgroundColor: 'transparent'
  },

  // disabled
  primaryDisabled: {
    backgroundColor: themeVars.BtnPrimaryDisabledBg
  },
  warnDisabled: {
    backgroundColor: themeVars.BtnWarnDisabledBg
  },
  defaultDisabled: {
    backgroundColor: themeVars.BtnDefaultDisabledBg
  },
  plainDisabled: {
    borderColor: 'rgba(0,0,0,.2)',
    backgroundColor: 'transparent'
  }
})

const underlayColors = {
  primaryActive: themeVars.BtnPrimaryActiveBg,
  warnActive: themeVars.BtnWarnActiveBg,
  defaultActive: themeVars.BtnDefaultActiveBg,
  primaryPlainActive: 'transparent',
  defaultPlainActive: 'transparent'
}

const getButtonStyles = ({ type, plain, size, disabled }) => {
  const config = [styles[type]]
  if (plain) {
    config.push(styles[`${type}Plain`])
  }
  if (size === 'small') {
    config.push(styles.mini)
  }
  if (disabled) {
    config.push(styles[`${type}Disabled`])
  }
  if (disabled && plain) {
    config.push(styles.plainDisabled)
  }
  return config
}

// const getUnderlayColor = ({type, plain}) => {
//     if (plain) {
//         return underlayColors[`${type}PlainActive`]
//     }
//     return underlayColors[`${type}Active`]
// }

const Button = (props: ButtonPropsType) => {
  const {
    type = 'default',
    plain = false,
    size,
    disabled = false,
    style,
    children,
    renderWeuiButtonText,
    mainColor,
    activeOpacity = 0.6,
    ...others
  } = props
  const buttonStyles = getButtonStyles({ type, plain, size, disabled })

  if (mainColor) {
    buttonStyles.push({
      backgroundColor: mainColor,
      borderColor: mainColor
    })
  }

  let touchableProps = {}
  if (!disabled) {
    touchableProps = others
  }
  const TouchableWrapperStyle = [styles.button, ...buttonStyles, style]
  const buttonTextProps = { type, plain, size, disabled, mainColor }
  /**
   * 默认 fallback 为 TouchableOpacity
   * 因为这里 TouchableOpacity 效果比 TouchableHighlight好一些
   */
  return (
    <TouchableWithFallback
      activeOpacity={activeOpacity}
      fallback={TouchableOpacity}
      style={TouchableWrapperStyle}
      {...touchableProps}
    >
      <View>
        {renderWeuiButtonText || (
          <WeuiButtonText {...buttonTextProps}>{children}</WeuiButtonText>
        )}
      </View>
    </TouchableWithFallback>
  )
}

export default Button
