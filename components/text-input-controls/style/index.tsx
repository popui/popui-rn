// import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

export default {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clear: {
    marginTop:2
  },
  extraText:{
    marginLeft: variables.h_spacing_sm,
    fontSize: variables.font_size_subhead,
    color: variables.color_text_caption,
  },
  errorIcon: {
    marginLeft: variables.h_spacing_sm,
    width: variables.textinput_base_height,
    height: variables.textinput_base_height,
  },
};
