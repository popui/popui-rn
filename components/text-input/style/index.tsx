import themeVars from '../../style/themes/default'

export default {
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: themeVars.textinput_base_height,
    backgroundColor: 'transparent',
    fontSize: themeVars.input_font_size,
    color: themeVars.color_text_base,
  },
  clear: {},
}
