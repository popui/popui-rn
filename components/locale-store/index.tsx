import { action, observable,runInAction } from "mobx";
import { persist } from "mobx-persist";

// debug
import { createDebug } from "../_util/debug";
const debug = createDebug("popui:store:locale");

class LocaleStore {
  @persist
  @observable
  locale: string;

  @persist
  @observable
  localeVars: Object;

  constructor({
    initialLocale,
    initialLocaleVars
  }: {
    initialLocale: string;
    initialLocaleVars: Object;
  }) {
    runInAction(()=>{
      this.locale = initialLocale;
      this.localeVars = initialLocaleVars;
    })
  }

  @action.bound
  setLocale(val: string) {
    this.locale = val;
  }
  @action.bound
  setLocaleVars(val: Object) {
    this.localeVars = val;
  }
}
export const localeStore = new LocaleStore({
  initialLocale: "default",
  initialLocaleVars: {}
});
export default LocaleStore;
