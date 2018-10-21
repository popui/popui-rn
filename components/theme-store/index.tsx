import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

// debug
import { createDebug } from '../_util/debug'
const debug = createDebug('ig:store:IGUserStateStore')

class ThemeStore {
  @persist
  @observable
  locale = ''

  @persist
  @observable
  localeVars = {}

  @action.bound
  setLocale(val: string) {
    this.locale = val
  }
  @action.bound
  setLocaleVars(val: Object) {
    this.localeVars = val
  }
}
export const themeStore = new ThemeStore()

export default ThemeStore
