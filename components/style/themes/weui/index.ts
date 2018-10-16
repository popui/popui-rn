import merge from 'lodash/merge'
import _button from './components/Button'
// import _cell from './components/Cell'
import _progress from './components/Progress'
import _dialog from './components/Dialog'
import _global from './Global'

const defaultConfig = merge(
  {},
  _global,
  _button,
  // _cell,
  _progress,
  _dialog,
)

export default defaultConfig
