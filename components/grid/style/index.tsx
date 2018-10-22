import {themeStore} from '../../theme-store';
const { themeVars } = themeStore;

export default {
  grayBorderBox: {
    borderColor: themeVars.border_color_base,
  },
  icon: {
    width: 28,
    height: 28,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: themeVars.font_size_base,
    color: themeVars.color_text_base,
    marginTop: 5,
  },
};
