import theme from '../../style/themes/default'
import { ViewStyle, TextStyle } from 'react-native'

export interface IToggleRowStyle {
  wrapper: ViewStyle
  icon: ViewStyle
  disabled: ViewStyle
  rowText: TextStyle
  rowTextDisabled: TextStyle
}

export default {
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 13 * 0.5,
    paddingBottom: 13 * 0.5,
    paddingLeft: theme.h_spacing_lg,
    paddingRight: theme.h_spacing_lg,
  },
  icon: {
    marginRight: theme.h_spacing_md,
  },
  disabled: {
    backgroundColor: '#E1E1E1',
  },
  rowText: {
    fontSize: 13,
    color: theme.color_text_base,
    // marginLeft: 5
  },
  rowTextDisabled: {
    color: theme.TextColorGray,
  },
}
