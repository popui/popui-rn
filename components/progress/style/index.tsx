import variables from '../../style/themes/default';

export default {
  progressInnerBar: {
    width: 0,
    height: variables.ProgressHeight,
    backgroundColor: variables.ProgressColor
  },
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
  },
};
