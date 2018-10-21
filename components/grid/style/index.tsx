import {themeStore} from '../../theme-store';
const { variables } = themeStore;

export default {
  grayBorderBox: {
    borderColor: variables.border_color_base,
  },
  icon: {
    width: 28,
    height: 28,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: variables.font_size_base,
    color: variables.color_text_base,
    marginTop: 5,
  },
};
