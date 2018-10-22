import { StyleSheet, TextStyle, ViewStyle, Dimensions } from "react-native";
import { themeStore } from "../../theme-store";
const { themeVars } = themeStore;
const { width } = Dimensions.get("window");

export interface IModalStyle {
  container: ViewStyle;
  wrap: ViewStyle;
  popupContainer: ViewStyle;
  innerContainer: ViewStyle;
  actions: ViewStyle;
  header: TextStyle;
  body: ViewStyle;
  maskClosable: ViewStyle;
  closeWrap: ViewStyle;
  close: TextStyle;
  buttonGroupH: ViewStyle;
  buttonGroupV: ViewStyle;
  buttonWrapH: ViewStyle;
  buttonWrapV: ViewStyle;
  buttonText: TextStyle;
  operationContainer: ViewStyle;
  operationBody: ViewStyle;
  buttonTextOperation: TextStyle;
}

export default {
  container: {
    zIndex: themeVars.modal_zindex
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center"
  },
  popupContainer: {},
  popupSlideUp: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  popupSlideDown: {},
  innerContainer: {
    width: width - 60,
    backgroundColor: themeVars.DialogBackgroundColor,
    borderRadius: 3,
    overflow: "hidden"
    // borderRadius: themeVars.radius_md,
    // width: 286,
    // paddingTop: themeVars.v_spacing_xl,
    // overflow: 'hidden',
  },
  // fix android borderRadius

  header: {
    paddingTop: 1.3 * themeVars.baseFontSize,
    paddingBottom: 0.5 * themeVars.baseFontSize,
    paddingLeft: themeVars.DialogGapWidth,
    paddingRight: themeVars.DialogGapWidth,
    fontWeight: "400",
    color: themeVars.color_text_base,
    fontSize: themeVars.modal_font_size_heading,
    textAlign: "center"
    // paddingHorizontal: themeVars.h_spacing_lg,
  },
  body: {
    paddingLeft: themeVars.DialogGapWidth,
    paddingRight: themeVars.DialogGapWidth,
    paddingBottom: 32, // (0.8 * 15) + 20,
    paddingTop: 0
    // paddingBottom: themeVars.v_spacing_lg,
    // paddingHorizontal: themeVars.h_spacing_lg,
  },
  bodyText: {
    color: themeVars.TextColorGray,
    lineHeight: 19.5, // 15 * 1.3,
    // android: {
    //     lineHeight: Math.round(15 * 1.3),
    // },
    fontSize: 15,
    textAlign: "center"
  },
  maskClosable: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent"
  },
  closeWrap: {
    position: "absolute",
    top: themeVars.v_spacing_lg,
    left: themeVars.h_spacing_lg
  },
  close: {
    fontSize: 40,
    fontWeight: "200",
    color: "#bcbcbc",
    lineHeight: 30
  },
  actions: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: themeVars.radius_md,
    borderBottomRightRadius: themeVars.radius_md
    // flexDirection: 'row',
    // height: 48,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderColor: themeVars.DialogLineColor,
    // borderStyle: 'solid',
  },
  buttonGroupH: {
    flexGrow: 1,
    flexDirection: "row"
  },
  buttonGroupV: {
    flexGrow: 1,
    flexDirection: "column"
  },
  buttonWrapH: {
    height: themeVars.modal_button_height,
    flexGrow: 1,
    justifyContent: "center",
    // borderColor: themeVars.border_color_base,
    borderColor: themeVars.DialogLineColor,
    borderStyle: 'solid',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingVertical: 11
  },
  buttonWrapV: {
    flexGrow: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    // borderColor: themeVars.border_color_base,
    borderColor: themeVars.DialogLineColor,
    // paddingVertical: 13,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 24,
    paddingRight: 24,
  },
  buttonText: {
    textAlign: "center",
    color: themeVars.color_link,
    fontSize: themeVars.modal_button_font_size,
    backgroundColor: "transparent"
  },
  buttonText_default: {
    color: '#353535',
  },
  buttonText_primary: {
      // color: '#0BB20C',
      color: themeVars.color_link,
  },
  buttonText_warn: {
      color: themeVars.ColorWarn,
  },
  buttonTextOperation: {
    color: themeVars.color_text_base,
    textAlign: "left",
    paddingHorizontal: 15
  }
};
