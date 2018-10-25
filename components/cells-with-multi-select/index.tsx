import xor from 'lodash/xor'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Cell, CellBody, CellHeader, Cells, CellText,ToggleIconCircle } from 'popui-rn'
// import WeuiIcon from '../weui-icon'
import themeVars from '../style/themes/default'
import {MultiSelectHeaderCellsPropsType} from './PropsType'
const styles = StyleSheet.create({
  icon: {
    paddingRight: themeVars.CellInnerGapH,
  },
  disabled: {
    opacity: 0.5,
  },
})

const CellsWithMultiSelect = ({
  values,
  options,
  onChange,
  disabled,
  style,
  children,
  ...others
}: MultiSelectHeaderCellsPropsType) => {
  const isChecked = (item:any) => values.filter((value:any) => value === item).length>0

  return (
    <Cells style={[style, disabled ? styles.disabled : null]} {...others}>
      {options.map((option, idx) => (
        <Cell
          key={idx}
          disabled={disabled}
          onPress={() => onChange && onChange(xor(values, [option.value]))}
        >
          <CellHeader>
            <ToggleIconCircle
              checked={isChecked(option.value)}
              style={styles.icon}
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
//   style: WeuiIcon.propTypes.style,
//   children: PropTypes.node
// }

export default CellsWithMultiSelect
