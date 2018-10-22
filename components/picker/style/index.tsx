import { TextStyle, ViewStyle,StyleSheet } from 'react-native';
import { themeStore } from '../../theme-store';
const { themeVars } = themeStore;

export interface IPickerStyle {
  modal: ViewStyle;
  header: ViewStyle;
  headerItem: ViewStyle;
  actionText: TextStyle;
  title: TextStyle;
}

const styles= {
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  cascade:{
    backgroundColor: '#EFEFF4',
    flexDirection: 'row', 
    alignItems: 'center'
  },
  cascadeLoading:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    height:200
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E5E5',
    backgroundColor: '#fbf9fe',
    height: 44,
  },
  headerItem: {
    height: 44,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#586C94',
    fontSize: themeVars.baseFontSize,
    textAlign: 'center',
  },
  okText: {},
  dismissText: {},
  title: {
    color: '#666',
    fontSize: 18,
    textAlign: 'center',
  },
};


export default styles