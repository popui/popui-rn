import React from 'react'
import {
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { MultiSelectPropsType } from './PropsType'
import ToggleIconCircle from '../toggle-icon-circle'
import ToggleRowProvider from '../toogle-row-provider'

function ToggleRowCircle(props:MultiSelectPropsType): JSX.Element {
  return (
    <ToggleRowProvider
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
              <ToggleIconCircle
                disabled={disabled}
                checked={checked}
                style={styles.icon}
              />
              {renderChildren(props.children)}
            </View>
          </TouchableWithoutFeedback>
        )
      }}
    </ToggleRowProvider>
  )
}


export default ToggleRowCircle
