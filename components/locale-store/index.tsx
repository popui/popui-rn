import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

// debug
import { createDebug } from '../_util/debug'
const debug = createDebug('ig:store:IGUserStateStore')

class LocaleStore {
  @persist
  @observable
  theme = ''

  @persist
  @observable
  themeVars = {}

  @action.bound
  setTheme(val: string) {
    this.theme = val
  }
  @action.bound
  setThemeVars(val: Object) {
    this.themeVars = val
  }
}
export const localeStore = new LocaleStore()

export default LocaleStore
