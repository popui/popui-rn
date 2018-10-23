import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export default {
  checkboxText: {
    fontSize: 13,
    color: themeVars.color_text_base,
    // marginLeft: 5
  },
  checkboxTextDisabled:{
    color: themeVars.TextColorGray,
  }
};
