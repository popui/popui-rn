import PropTypes from 'prop-types'
import React from 'react'
import { Text, TextInput, View, ViewPropTypes } from 'react-native'
import { create } from 'popui/components/StyleSheet'
import V from '../style/themes/weui'

const styles = create({
    textarea: {
        fontSize: V.CellFontSize,
        height: V.CellFontSize * V.baseLineHeight * 3,
        lineHeight: V.CellFontSize * V.baseLineHeight,
        android: {
            lineHeight: Math.round(V.CellFontSize * V.baseLineHeight),
        },
    },
    textareaCounter: {
        color: V.TextColorTips,
        textAlign: 'right',
    },
})

const TextArea = ({
                      value,
                      onChange,
                      showCounter = true,
                      maxLength,
                      defaultValue,
                      disabled = false,
                      style,
                      ...others,
                  }) =>
    <View>
        <TextInput
            multiline={!false}
            maxLength={maxLength}
            onChangeText={onChange}
            value={value}
            defaultValue={defaultValue}
            editable={!disabled}
            style={[styles.textarea, style]}
            {...others}
        />
        {showCounter ?
            <Text
                style={styles.textareaCounter}
            >{(value || defaultValue || '').length}{maxLength ? `/ ${maxLength}` : false}</Text>
            : false}
    </View>

TextArea.propTypes = {
    value: PropTypes.string,
    showCounter: PropTypes.bool,
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    style: TextInput.propTypes.style,
}

export default TextArea
