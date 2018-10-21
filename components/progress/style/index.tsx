import {themeStore} from '../../theme-store';
const { variables } = themeStore;

export default {
  progressOuter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: variables.ProgressBg,
    height: variables.ProgressHeight,
    flex: 1,
  },
  progressBar: {
    borderBottomWidth: variables.ProgressHeight,
    borderStyle: 'solid',
    borderColor: variables.ProgressColor,
  }
};
