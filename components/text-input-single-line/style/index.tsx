import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

export default {
  container: {
    height: variables.list_item_height + variables.border_width_sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
    marginLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftLabel: {
    marginRight: variables.h_spacing_sm,
    textAlignVertical: 'center',
    fontSize: variables.font_size_heading,
    color: variables.color_text_base,
  },
  input: {
    flex: 1,
    height: variables.list_item_height,
    backgroundColor: 'transparent',
    fontSize: variables.input_font_size,
    color: variables.color_text_base,
  },
  controls:{

  }
};
