import merge from 'lodash/merge'
import _button from 'popui/theme/ThemeVariables/components/Button'
import _grid from 'popui/theme/ThemeVariables/components/Grid'
import _cell from 'popui/theme/ThemeVariables/components/Cell'
import _msg from 'popui/theme/ThemeVariables/components/Msg'
import _progress from 'popui/theme/ThemeVariables/components/Progress'
import _dialog from 'popui/theme/ThemeVariables/components/Dialog'
import _form from 'popui/theme/ThemeVariables/components/Form'
import _global from 'popui/theme/ThemeVariables/Global'

const defaultConfig = merge(
  {},
  _global,
  _button,
  _grid,
  _cell,
  _msg,
  _progress,
  _dialog,
  _form
)

export default defaultConfig
