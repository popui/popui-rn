import { action, observable,runInAction } from "mobx";
import { persist } from "mobx-persist";
import defaultThemeVariables from "../style/themes/default";

// debug
import { createDebug } from "../_util/debug";
const debug = createDebug("ig:store:IGUserStateStore");

class ThemeStore {
  @persist
  @observable
  theme: string;

  @persist
  @observable
  themeVars: Object;

  constructor({
    initialTheme,
    initialThemeVars
  }: {
    initialTheme: string;
    initialThemeVars: Object;
  }) {
    runInAction(()=>{
      this.theme = initialTheme;
      this.themeVars = initialThemeVars;
    })
  }

  @action.bound
  setTheme(val: string) {
    this.theme = val;
  }
  @action.bound
  setThemeVars(val: Object) {
    this.themeVars = val;
  }
}
export const themeStore = new ThemeStore({
  initialTheme: "default",
  initialThemeVars: defaultThemeVariables
});
export default ThemeStore;
