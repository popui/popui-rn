import themeVars from '../../style/themes/default';
import { ViewStyle, TextStyle } from 'react-native';

export interface IRadioStyle {
  wrapper: ViewStyle;
  icon: ViewStyle;
  radioItem: ViewStyle;
  radioItemRadio: ViewStyle;
  radioItemContent: TextStyle;
  radioItemContentDisable: TextStyle;
}

// export default {
//   wrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     width: themeVars.icon_size_xxs,
//     height: themeVars.icon_size_xxs * 0.8,
//   },
//   // radioItem: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   // },
//   // radioItemRadio: {
//   //   marginLeft: themeVars.h_spacing_lg,
//   //   marginRight: themeVars.h_spacing_md,
//   // },
//   // radioItemContent: {
//   //   color: themeVars.color_text_base,
//   //   fontSize: themeVars.font_size_heading,
//   // },
//   // radioItemContentDisable: {
//   //   color: themeVars.color_text_disabled,
//   // },
// };


export default {
  wrapper: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
    paddingTop: 13 * 0.5,
    paddingBottom: 13 * 0.5,
    paddingLeft: 15,
    paddingRight: 15
  },
  radio:{
    marginLeft: themeVars.h_spacing_lg,
    marginRight: themeVars.h_spacing_md,
  },
  disabled: {
    backgroundColor: "#E1E1E1"
  },
  // checkboxItemCheckbox: {
  //   marginRight: themeVars.h_spacing_md,
  //   alignSelf: 'center',
  // },
};
