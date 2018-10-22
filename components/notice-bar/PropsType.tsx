import React from 'react';
import { observer } from 'mobx-react'

export interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  icon?: React.ReactElement<any>;
  action?: React.ReactElement<any>;
}
