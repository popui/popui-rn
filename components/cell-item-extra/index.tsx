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
    direction = 'column',
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
    if (typeof item === 'string') {
      return (
        <CellItemText
          style={styles.extraText}
          key={`${index}-children`}
          error={error}
          {...numberOfLinesProp}
        >
          {item}
        </CellItemText>
      )
    }
    // const itemIsValid = React.isValidElement(item)
    // if(itemIsValid){
    //   return item
    // }
    return item
  }

  let content: any
  const childrenIsArray = Array.isArray(children)
  if (childrenIsArray) {
    content = children.map((el, index) =>
      renderChildrenItem({ item: el, index })
    )
  } else {
    content = renderChildrenItem({
      item: children,
      index: 0,
    })
  }
  const containerStyle = [
    direction == 'row' ? styles.containerRow : styles.containerColumn,
    style,
  ]
  return (
    <View displayName="CellItemExtra" style={containerStyle}>
      {content}
    </View>
  )
}

export default CellItemExtra
