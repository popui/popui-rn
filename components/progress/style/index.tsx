import themeVars from '../../style/themes/default'

export default {
  progressOuter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeVars.ProgressBg,
    height: themeVars.ProgressHeight,
    flex: 1,
  },
  progressBar: {
    borderBottomWidth: themeVars.ProgressHeight,
    borderStyle: 'solid',
    borderColor: themeVars.ProgressColor,
  },
}
