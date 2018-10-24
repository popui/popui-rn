import React from 'react'
import {
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { SingleSelectPropsType } from './PropsType'
import CheckBox from '../checkbox'
import SelectRowProvider from '../select-row-provider'

function SingleSelectRow(props:SingleSelectPropsType): JSX.Element {
  return (
    <SelectRowProvider
      {...props}
    >
      {(providerProps) => {
        const {
          checked,
          disabled,
          styles,
          style,
          onPress,
          renderChildren
        } = providerProps
        return (
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.wrapper, style]}>
              <CheckBox
                disabled={disabled}
                checked={checked}
                style={styles.icon}
              />
              {renderChildren()}
            </View>
          </TouchableWithoutFeedback>
        )
      }}
    </SelectRowProvider>
  )
}


export default SingleSelectRow
