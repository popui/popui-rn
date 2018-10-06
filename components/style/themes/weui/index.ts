import merge from 'lodash/merge'
import _button from './components/Button'
import _cell from './components/Cell'
import _msg from './components/Msg'
import _progress from './components/Progress'
import _dialog from './components/Dialog'
import _form from './components/Form'
import _global from './Global'

const defaultConfig = merge(
  {},
  _global,
  _button,
  _cell,
  _msg,
  _progress,
  _dialog,
  _form
)

export default defaultConfig
