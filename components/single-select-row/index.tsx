import React from 'react'
import {
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { MultiSelectPropsType } from './PropsType'
import MultiSelectIconControl from '../multi-select-icon-control'
import SelectRowProvider from '../select-row-provider'

function MultiSelectRow(props:MultiSelectPropsType): JSX.Element {
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
              <MultiSelectIconControl
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


export default MultiSelectRow
