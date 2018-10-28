import * as React from 'react'
import { View, Image } from 'react-native'
import { CellItemBodyProps } from './PropsType'
import defautlStyles from './style'

const CellItemHeader: React.SFC<CellItemBodyProps> = (
  props: CellItemBodyProps
) => {
  const { children, styles = defautlStyles, style, error, multipleLine } = props
  if (!children) {
    return null
  }
  let content = children
  if (typeof children === 'string') {
    content = (
      <Image
        source={{ uri: children }}
        style={[styles.thumb, multipleLine && styles.multipleThumb]}
      />
    )
  }
  return (
    <View displayName="CellItemHeader" style={[styles.header, style]}>
      {content}
    </View>
  )
}

export default CellItemHeader
