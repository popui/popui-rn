import PropTypes from 'prop-types';
import React from 'react';
import { observer } from 'mobx-react'

export interface LocaleProviderProps {
  locale: {
    Pagination?: object;
    DatePicker?: object;
    DatePickerView?: object;
    InputItem?: object;
  };
  children?: React.ReactElement<any>;
}

@observer
export default class LocaleProvider extends React.Component<
  LocaleProviderProps,
  any
> {
  static propTypes = {
    locale: PropTypes.object,
  };

  static childContextTypes = {
    antLocale: PropTypes.object,
  };

  getChildContext() {
    return {
      antLocale: {
        ...this.props.locale,
        exist: true,
      },
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
