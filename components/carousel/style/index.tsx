import themeVars from '../../style/themes/default'

export default {
  pagination: {
    position: 'absolute',
    alignItems: 'center',
  },
  paginationX: {
    bottom: 10,
    left: 0,
    right: 0,
  },
  paginationY: {
    right: 10,
    top: 0,
    bottom: 0,
  },
  pointStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: themeVars.color_icon_base,
  },
  pointActiveStyle: {
    backgroundColor: '#888',
  },
  spaceStyle: {
    marginHorizontal: themeVars.h_spacing_sm / 2,
    marginVertical: themeVars.v_spacing_sm / 2,
  },
}
