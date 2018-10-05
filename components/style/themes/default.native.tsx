
import antd from './antd'
import weui from './weui'
import merge from 'lodash/merge'

const defaultConfig = merge(
  {},
  antd,
  weui
)

export default defaultConfig
