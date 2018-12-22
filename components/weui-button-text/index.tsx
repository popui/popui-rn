// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../style/themes/default'
import { WeuiButtonTextPropsType } from './PropsType'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.BtnFontSize,
    textAlign: 'center',
    marginTop: (theme.BtnHeight - theme.BtnFontSize) / 2,
    marginBottom: (theme.BtnHeight - theme.BtnFontSize) / 2,
  },

  miniText: {
    fontSize: theme.BtnMiniFontSize,
    marginTop:
      (theme.BtnMiniHeight * theme.BtnMiniFontSize -
        theme.BtnMiniFontSize) /
      2,
    marginBottom:
      (theme.BtnMiniHeight * theme.BtnMiniFontSize -
        theme.BtnMiniFontSize) /
      2,
  },

  // primary
  primaryText: {
    color: theme.BtnFontColor,
  },

  // warn
  warnText: {
    color: theme.BtnFontColor,
  },

  // default
  defaultText: {
    color: theme.BtnDefaultFontColor,
  },

  // primaryPlain
  primaryPlainText: {
    color: theme.BtnPlainPrimaryColor,
  },

  // defaultPlain
  defaultPlainText: {
    color: theme.BtnPlainDefaultColor,
  },

  // disabled
  disabledText: {
    color: theme.BtnDisabledFontColor,
  },

  defaultDisabledText: {
    color: theme.BtnDefaultDisabledFontColor,
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
