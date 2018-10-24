import React from 'react'
import { StyleSheet } from 'react-native'
import { Cell, CellBody, Cells, CellText,ToggleIconCircle } from 'popui-rn'
import {SelectFooterCellsPropsType,SelectOption} from './PropsType';
import themeVars from '../style/themes/default'

const styles = StyleSheet.create({
  icon: {
    fontSize: 16,
    paddingLeft: themeVars.CellInnerGapH,
  },
  disabled: {
    opacity: 0.5,
  },
})

const CellsWithSingleSelect = ({
  value,
  options,
  onChange,
  disabled,
  style,
  children,
  ...others
}: SelectFooterCellsPropsType) => {
  return (
    <Cells style={[style, disabled ? styles.disabled : null]} {...others}>
      {options.map((option:SelectOption, idx:number) => (
        <Cell key={idx} onPress={() => !disabled && onChange && onChange(option.value)}>
          <CellBody>
            <CellText>{option.label || option.value}</CellText>
          </CellBody>
          {value === option.value && <ToggleIconCircle
            disabled={disabled}
            checked
          />}
        </Cell>
      ))}
      {children}
    </Cells>
  )
}

// RadioCells.propTypes = {
//     value: PropTypes.any,
//     options: PropTypes.array.isRequired,
//     onChange: PropTypes.func,
//     disabled: PropTypes.bool,
//     style: WeuiIcon.propTypes.style,
//     children: PropTypes.node,
// }

export default CellsWithSingleSelect
