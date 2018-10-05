import PropTypes from 'prop-types'
import React from 'react'
import { Text, View, ViewPropTypes } from 'react-native'
import Button from 'popui/components/Button/Button'
import { WeuiIcon } from 'popui/components/Icon'
import { create } from 'popui/components/StyleSheet'
import V from 'popui/theme/ThemeVariables'

const styles = create({
  msg: {
    paddingTop: V.MsgPaddingTop
  },
  iconArea: {
    marginBottom: V.MsgIconGap
  },
  textArea: {
    marginBottom: V.MsgTextGap,
    paddingLeft: 20,
    paddingRight: 20
  },
  msgTitle: {
    marginBottom: V.MsgTitleGap,
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center'
  },
  msgDesc: {
    fontSize: 14,
    color: V.TextColorGray,
    textAlign: 'center',
    lineHeight: 14 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(14 * V.baseLineHeight)
    }
  },
  oprArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0 - V.BtnDefaultGap,
    marginBottom: V.MsgOprGap,
    paddingLeft: V.BtnDefaultGap,
    paddingRight: V.BtnDefaultGap
  },
  oprAreaButton: {
    marginTop: V.BtnDefaultGap
  },
  extraArea: {
    marginBottom: V.MsgExtraAreaGap,
    fontSize: 14,
    color: V.TextColorGray,
    textAlign: 'center',
    lineHeight: 14 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(14 * V.baseLineHeight)
    }
  }
})

const _renderButtons = buttons =>
  buttons.map((button, idx) => {
    const { type, label, style, ...others } = button
    return (
      <Button
        key={idx}
        type={type}
        style={[styles.oprAreaButton, style]}
        {...others}
      >
        {label}
      </Button>
    )
  })

const Msg = ({
  type = 'success',
  buttons = [],
  renderButtons,
  title,
  description,
  extraText
}) => {
  const iconView = (
    <View style={styles.iconArea}>
      <WeuiIcon name={type} msg />
    </View>
  )
  const titleView = title ? (
    <Text style={styles.msgTitle} numberOfLines={1}>
      {title}
    </Text>
  ) : null
  const descriptionView = description ? (
    <View style={styles.textArea}>
      <Text style={styles.msgDesc} numberOfLines={10}>
        {description}
      </Text>
    </View>
  ) : null
  const btnsView =
    buttons.length > 0 ? (
      <View style={styles.oprArea}>
        {renderButtons ? renderButtons() : _renderButtons(buttons)}
      </View>
    ) : null
  const extraTextView = extraText ? (
    <Text style={styles.extraArea}>{extraText}</Text>
  ) : null

  return (
    <View style={styles.msg}>
      {iconView}
      {titleView}
      {descriptionView}
      {btnsView}
      {extraTextView}
    </View>
  )
}

Msg.propTypes = {
  type: PropTypes.string,
  buttons: PropTypes.array,
  renderButtons: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  extraText: PropTypes.node
}

export default Msg
