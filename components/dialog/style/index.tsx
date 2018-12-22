import { StyleSheet, TextStyle, ViewStyle, Dimensions } from 'react-native'
import theme from '../../style/themes/default'
const { width } = Dimensions.get('window')

export interface IModalStyle {
  container: ViewStyle
  wrap: ViewStyle
  innerContainer: ViewStyle
  dialogRoot: ViewStyle
  actions: ViewStyle
  header: TextStyle
  body: ViewStyle
  maskClosable: ViewStyle
  closeWrap: ViewStyle
  close: TextStyle
  buttonGroupH: ViewStyle
  buttonGroupV: ViewStyle
  buttonWrapH: ViewStyle
  buttonWrapV: ViewStyle
  buttonText: TextStyle
  operationContainer: ViewStyle
  operationBody: ViewStyle
  buttonTextOperation: TextStyle
}

export default {
  container: {
    zIndex: theme.modal_zindex,
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: width - 60,
    backgroundColor: theme.DialogBackgroundColor,
    borderRadius: 3,
    overflow: 'hidden',
    // borderRadius: theme.radius_md,
    // width: 286,
    // paddingTop: theme.v_spacing_xl,
    // overflow: 'hidden',
  },
  // fix android borderRadius
  dialogRoot: {
    width: width - 60,
    backgroundColor: theme.DialogBackgroundColor,
    borderRadius: 3,
    overflow: 'hidden',
    maxHeight: Dimensions.get('window').height - 100,
  },
  header: {
    paddingTop: 1.3 * theme.baseFontSize,
    paddingBottom: 0.5 * theme.baseFontSize,
    paddingLeft: theme.DialogGapWidth,
    paddingRight: theme.DialogGapWidth,
    fontWeight: '400',
    color: theme.color_text_base,
    fontSize: theme.modal_font_size_heading,
    textAlign: 'center',
    // paddingHorizontal: theme.h_spacing_lg,
  },
  body: {
    paddingLeft: theme.DialogGapWidth,
    paddingRight: theme.DialogGapWidth,
    paddingBottom: 24, // 15*1.6,
    paddingTop: 0,
    maxHeight: Dimensions.get('window').height - 196,
    // paddingBottom: theme.v_spacing_lg,
    // paddingHorizontal: theme.h_spacing_lg,
  },
  bodyText: {
    color: theme.TextColorGray,
    lineHeight: 19.5, // 15 * 1.3,
    // android: {
    //     lineHeight: Math.round(15 * 1.3),
    // },
    fontSize: 15,
    textAlign: 'center',
  },
  maskClosable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  closeWrap: {
    position: 'absolute',
    top: theme.v_spacing_lg,
    left: theme.h_spacing_lg,
  },
  close: {
    fontSize: 40,
    fontWeight: '200',
    color: '#bcbcbc',
    lineHeight: 30,
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: theme.radius_md,
    borderBottomRightRadius: theme.radius_md,
    // flexDirection: 'row',
    // height: 48,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderColor: theme.DialogLineColor,
    // borderStyle: 'solid',
  },
  buttonGroupH: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  buttonGroupV: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  buttonWrapH: {
    height: theme.modal_button_height,
    flexGrow: 1,
    justifyContent: 'center',
    // borderColor: theme.border_color_base,
    borderColor: theme.DialogLineColor,
    borderStyle: 'solid',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingVertical: 11,
  },
  buttonWrapV: {
    flexGrow: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    // borderColor: theme.border_color_base,
    borderColor: theme.DialogLineColor,
    // paddingVertical: 13,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 24,
    paddingRight: 24,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.color_link,
    fontSize: theme.modal_button_font_size,
    backgroundColor: 'transparent',
  },
  buttonText_default: {
    color: '#353535',
  },
  buttonText_primary: {
    // color: '#0BB20C',
    color: theme.color_link,
  },
  buttonText_warn: {
    color: theme.ColorWarn,
  },
  buttonTextOperation: {
    color: theme.color_text_base,
    textAlign: 'left',
    paddingHorizontal: 15,
  },
}
