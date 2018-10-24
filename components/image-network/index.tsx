import React from 'react'
;
import { Image as RNImage } from 'react-native'
import has from 'lodash/has'

/**
 * 给定默认背景色,
 * iOS 默认缓存网络图片
 * @param {any} style
 * @param {any} source
 * @param {any} children
 * @param {any} others
 * @returns {any}
 * @constructor
 */

export interface IProps {
  style?: any
  source: any
  children?: any
}

export const NetworkImage = (props: IProps) => {
  const { style = {}, source, children, ...others } = props
  // backgroundColor
  if (has(style, 'backgroundColor')) {
    style.backgroundColor = '#888888'
  } // cache
  const { uri, cache } = source
  if (uri && !cache) {
    source.cache = 'force-cache'
  }
  return (
    <RNImage style={style} source={source} {...others}>
      {children}
    </RNImage>
  )
}

export default NetworkImage
