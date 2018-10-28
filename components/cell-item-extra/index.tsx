import * as React from 'react'
import { View } from 'react-native'
import CellItemText from '../cell-item-text'
import { CellItemExtraProps } from './PropsType'
import defautlStyles from './style'

const CellItemExtra: React.SFC<CellItemExtraProps> = (
  props: CellItemExtraProps
) => {
  const {
    children,
    styles = defautlStyles,
    style,
    error,
    numberOfLinesProp,
  } = props
  if (!children) {
    return null
  }

  const renderChildrenItem = ({
    item,
    index,
  }: {
    item: any
    index?: number
  }) => {
    if (React.isValidElement(item)) {
      return item
    }
    if (typeof item === 'string') {
      return (
        <CellItemText
          style={[styles.extraText]}
          key={`${index}-children`}
          error={error}
          {...numberOfLinesProp}
        >
          {item}
        </CellItemText>
      )
    }
  }

  let content: any
  if (Array.isArray(children)) {
    content = children.forEach((el, index) =>
      renderChildrenItem({ item: el, index })
    )
  } else {
    content = renderChildrenItem({
      item: children,
      index: 0,
    })
  }
  return (
    <View displayName="CellItemExtra" style={[styles.extra, style]}>
      {content}
    </View>
  )
}

export default CellItemExtra
