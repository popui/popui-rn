import { action, observable,runInAction } from "mobx";
import { persist } from "mobx-persist";
import defaultThemeVariables from "../style/themes/default";

// debug
import { createDebug } from "../_util/debug";
const debug = createDebug("popui:store:theme");

class ThemeStore {
  @persist
  @observable
  theme: string;

  @persist
  @observable
  themeVars= defaultThemeVariables;

  constructor({
    initialTheme,
    initialThemeVars
  }: {
    initialTheme: string;
    initialThemeVars: any;
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
  setThemeVars(val: any) {
    this.themeVars = val;
  }
}
export const themeStore = new ThemeStore({
  initialTheme: "default",
  initialThemeVars: defaultThemeVariables
});
export default ThemeStore;
