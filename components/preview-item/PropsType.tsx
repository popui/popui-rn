import React from 'React';
import { observer } from 'mobx-react';
import {ViewStyle} from 'react-native';
export interface PreviewItemPropsType {
    style?: ViewStyle,
    children?: React.ReactNode
    preset?:'header' | 'body'
}
