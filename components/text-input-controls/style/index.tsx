// import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

export default {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clear: {
    padding: 5,
  },
  extra: {
    marginLeft: variables.h_spacing_sm,
    fontSize: variables.font_size_subhead,
    color: variables.color_text_caption,
  },
  errorIcon: {
    marginLeft: variables.h_spacing_sm,
    width: variables.icon_size_xs,
    height: variables.icon_size_xs,
  },
};
