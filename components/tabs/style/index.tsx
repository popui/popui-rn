import themeVars from '../../style/themes/default';
import * as RN from 'react-native';

export default {
  Tabs: {
    container: {
      flex: 1,
    } as RN.ViewStyle,
    topTabBarSplitLine: {
      borderBottomColor: themeVars.border_color_base,
      borderBottomWidth: 1,
    } as RN.ViewStyle,
    bottomTabBarSplitLine: {
      borderTopColor: themeVars.border_color_base,
      borderTopWidth: 1,
    } as RN.ViewStyle,
  },
  TabBar: {
    container: {
    },
    tabs: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: themeVars.fill_base,
      justifyContent: 'space-around',
      shadowRadius: 0,
      shadowOpacity: 0,
      elevation: 0,
    } as RN.ViewStyle,
    tab: {
      height: themeVars.tabs_height,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      flexDirection: 'row',
    } as RN.ViewStyle,
    underline: {
      height: 2,
      backgroundColor: themeVars.tabs_color,
    } as RN.ViewStyle,
    textStyle: {
      fontSize: 15,
    } as RN.ViewStyle,
    activeTextColor: themeVars.tabs_color,
    inactiveTextColor: themeVars.color_text_base,
  },
};
