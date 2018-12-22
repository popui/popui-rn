import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface ProgressStyle {
  progressOuter: ViewStyle;
  progressBar: ViewStyle;
}
export default (theme: Theme) =>
  StyleSheet.create<ProgressStyle>({
    progressOuter: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.ProgressBg,
      height: theme.ProgressHeight,
      flex: 1,
    },
    progressBar: {
      borderBottomWidth: theme.ProgressHeight,
      borderStyle: 'solid',
      borderColor: theme.ProgressColor,
    },
  });
