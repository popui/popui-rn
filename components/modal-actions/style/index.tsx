import { StyleSheet } from "react-native";
import { themeStore } from "../../theme-store";
const { themeVars } = themeStore;

export default {
    actions: {
        // position: "absolute",
        // bottom: 0,
        // left: 0,
        // right: 0,
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
}