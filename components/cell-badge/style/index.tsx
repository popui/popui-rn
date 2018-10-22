import { themeStore } from '../../theme-store';
const { themeVars } = themeStore;

export default {
    badge: {
      color: '#FFFFFF',
      fontSize: 12,
      paddingLeft: 3.5,
      paddingRight: 3.5,
      lineHeight: 14,
      paddingTop: 1,
      textAlign: 'center',
      backgroundColor: themeVars.ColorWarn,
      borderWidth: 1.5,
      borderColor: 'transparent',
      borderRadius: 8.5,
      overflow: 'hidden'
    },
    default: {},
    header: {
      position: 'absolute',
      top: -3, // 0 - 12 * 0.4,
      right: -3 // 0 - 12 * 0.4
    },
    body: {
      marginLeft: 5
    },
    footer: {
      marginLeft: 5,
      marginRight: 5
    },
    dot: {
      borderRadius: 5, // 12 * 0.6 * 0.5
      width: 10, // 12 * 0.6
      height: 10 // 12 * 0.6
    }
  }