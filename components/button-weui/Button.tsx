import React from 'react'
import { StyleSheet, TouchableOpacity, View, ViewPropTypes } from 'react-native'
import V from '../style/themes/default'
import ButtonText from './ButtonText'
import TouchableWithFallback from '../touchable-with-fallback'

// const Color = require('color')

const styles = StyleSheet.create({
  // global
  button: {
    borderRadius: V.BtnBorderRadius,
    borderWidth: StyleSheet.hairlineWidth,
    paddingLeft: 14,
    paddingRight: 14,
    borderColor: 'rgba(0,0,0,0.2)',
    overflow: 'hidden'
  },

  // mini
  mini: {
    paddingLeft: V.BtnMiniFontSize * 0.75,
    paddingRight: V.BtnMiniFontSize * 0.75
  },

  // primary
  primary: {
    backgroundColor: V.BtnPrimaryBg
  },

  // warn
  warn: {
    backgroundColor: V.BtnWarnBg
  },

  // default
  default: {
    backgroundColor: V.BtnDefaultBg
  },

  // primaryPlain
  primaryPlain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: V.BtnPlainPrimaryBorderColor,
    backgroundColor: 'transparent'
  },

  // defaultPlain
  defaultPlain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: V.BtnPlainDefaultBorderColor,
    backgroundColor: 'transparent'
  },

  // disabled
  primaryDisabled: {
    backgroundColor: V.BtnPrimaryDisabledBg
  },
  warnDisabled: {
    backgroundColor: V.BtnWarnDisabledBg
  },
  defaultDisabled: {
    backgroundColor: V.BtnDefaultDisabledBg
  },
  plainDisabled: {
    borderColor: 'rgba(0,0,0,.2)',
    backgroundColor: 'transparent'
  }
})

const underlayColors = {
  primaryActive: V.BtnPrimaryActiveBg,
  warnActive: V.BtnWarnActiveBg,
  defaultActive: V.BtnDefaultActiveBg,
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

export interface IProps {
  type?: string
  size?: string
  plain?: boolean
  disabled?: boolean
  onPress?: (any) => any
  onPressIn?: (any) => any
  onPressOut?: (any) => any
  onLongPress?: (any) => any
  style?: any
  children?: any
  mainColor?: string
  activeOpacity?: number
  renderButtonText?: (any) => any
}

const Button = (props: IProps) => {
  const {
    type = 'default',
    plain = false,
    size,
    disabled = false,
    style,
    children,
    renderButtonText,
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
        {renderButtonText || (
          <ButtonText {...buttonTextProps}>{children}</ButtonText>
        )}
      </View>
    </TouchableWithFallback>
  )
}

export default Button
