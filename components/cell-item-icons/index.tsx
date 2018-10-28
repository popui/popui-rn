import * as React from 'react'
import { View, Image } from 'react-native'
import { CellItemBodyProps } from './PropsType'
import defautlStyles from './style'
import WeuiIcon from '../weui-icon'

const ArrowIcon = ({ arrow, styles }: any) => {
  let arrowView: any
  switch (arrow) {
    case 'up':
      arrowView = (
        <Image
          source={require('../style/images/arrow-up.png')}
          style={styles.arrowV}
        />
      )
      break
    case 'down':
      arrowView = (
        <Image
          source={require('../style/images/arrow-down.png')}
          style={styles.arrowV}
        />
      )
      break
    case 'horizontal':
      arrowView = (
        <Image
          source={require('../style/images/arrow.png')}
          style={styles.arrow}
        />
      )
      break
    default:
  }
  return arrowView
}

const CellItemHeader: React.SFC<CellItemBodyProps> = (
  props: CellItemBodyProps
) => {
  const { arrow, styles = defautlStyles, style, error } = props
  let content
  if (!arrow && !error) {
    return null
  }
  return (
    <View displayName="CellItemIcons" style={styles.iconsContainer}>
      {error && <WeuiIcon name="warn" style={styles.errorIcon} />}
      {ArrowIcon({
        arrow,
        styles,
      })}
    </View>
  )
}

export default CellItemHeader
