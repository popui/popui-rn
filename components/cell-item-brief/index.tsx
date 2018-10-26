/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import { StyleSheet, Text } from 'react-native'
import { BriefProps as BriefBasePropsType } from './PropsType'
import listItemStyle from './style/index'

export interface BriefProps extends BriefBasePropsType {
  styles?: {
    Brief: {}
    BriefText: {}
  }
}

const listStyles = StyleSheet.create<any>(listItemStyle)

 function CellItemBrief(props: BriefProps) {
  const { children, style, styles = listStyles, wrap=false } = props

  let numberOfLines = {}

  if (!wrap) {
    numberOfLines = {
      numberOfLines: 1,
    }
  }
  return (
    // <View style={[styles!.Brief]}>
      <Text style={[styles!.BriefText, style]} {...numberOfLines}>
        {children}
      </Text>
    // </View>
  )
}

export default CellItemBrief
