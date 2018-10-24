import React from 'react'
import {
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { SingleSelectPropsType } from './PropsType'
import ToggleIconCheckBox from '../toggle-icon-check-box'
import ToggleRowProvider from '../toogle-row-provider'

function ToggleRowCheckBox(props:SingleSelectPropsType): JSX.Element {
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
              <ToggleIconCheckBox
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


export default ToggleRowCheckBox
