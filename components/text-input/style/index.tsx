import theme from '../../style/themes/default'

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
    height: theme.textinput_base_height,
    backgroundColor: 'transparent',
    fontSize: theme.input_font_size,
    color: theme.color_text_base,
  },
  clear: {},
}
