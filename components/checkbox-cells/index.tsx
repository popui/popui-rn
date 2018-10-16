import xor from 'lodash/xor'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Cell, CellBody, CellHeader, Cells, CellText } from 'popui-rn'
import IconWeui from '../icon-weui'
import varibles from '../style/themes/default'

const styles = StyleSheet.create({
  checkbox: {
    fontSize: 23,
    paddingRight: varibles.CellInnerGapH
  },
  disabled: {
    opacity: 0.5
  }
})

const CheckboxCells = ({
  value,
  options,
  onChange,
  disabled,
  style,
  children,
  ...others
}:any) => {
  const inArray = v => value.filter(a => a === v).length

  return (
    <Cells style={[style, disabled ? styles.disabled : null]} {...others}>
      {options.map((option, idx) => (
        <Cell
          key={idx}
          onPress={() => !disabled && onChange(xor(value, [option.value]))}
        >
          <CellHeader>
            <IconWeui
              name={inArray(option.value) ? 'success' : 'circle'}
              style={styles.checkbox}
            />
          </CellHeader>
          <CellBody>
            <CellText>{option.label}</CellText>
          </CellBody>
        </Cell>
      ))}
      {children}
    </Cells>
  )
}

// CheckboxCells.propTypes = {
//   value: PropTypes.any,
//   onChange: PropTypes.func,
//   options: PropTypes.array.isRequired,
//   disabled: PropTypes.bool,
//   style: IconWeui.propTypes.style,
//   children: PropTypes.node
// }

export default CheckboxCells
