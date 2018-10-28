import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native'
import themeVars from '../style/themes/default'

const styles = StyleSheet.create({
  cellBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    color: themeVars.ColorWarn,
  },
  errorIcon: {
    marginLeft: 5,
  },
})
interface CellItemBodyProps {
  style?:any
  direction?:'row' | 'column'
}

const CellItemBody: React.SFC<CellItemBodyProps> = (props:CellItemBodyProps) => {
  const { style, ...others } =  props
  return (
    <View
      style={[
        styles.cellBody,
        style,
      ]}
      {...others}
    >
      {this.renderChildrenWithProps()}
    </View>
  )
};

export default CellItemBody;
