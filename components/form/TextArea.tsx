// import PropTypes from 'prop-types'
import React from 'react'
import { Text, TextInput, View, ViewPropTypes } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import varibles from '../style/themes/default'

const styles = create({
    textarea: {
        fontSize: varibles.CellFontSize,// 17
        height: varibles.CellFontSize * varibles.baseLineHeight * 3, //81.6
        lineHeight: varibles.CellFontSize * varibles.baseLineHeight, //27.2
        android: {
            lineHeight: Math.round(varibles.CellFontSize * varibles.baseLineHeight),
        },
    },
    textareaCounter: {
        color: varibles.TextColorTips, // B2B2B2
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
                      ...others
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

// TextArea.propTypes = {
//     value: PropTypes.string,
//     showCounter: PropTypes.bool,
//     maxLength: PropTypes.number,
//     defaultValue: PropTypes.string,
//     onChange: PropTypes.func,
//     disabled: PropTypes.bool,
//     style: TextInput.propTypes.style,
// }

export default TextArea
