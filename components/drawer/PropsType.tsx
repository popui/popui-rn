import React, { CSSProperties } from 'react';
import { observer } from 'mobx-react';

export interface DrawerProps {
  onOpenChange?: (isOpen: boolean) => void;
  sidebar?: React.ReactNode;
  open?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

export interface DrawerWebProps extends DrawerProps {
  sidebarStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  overlayStyle?: CSSProperties;
  dragHandleStyle?: CSSProperties;
  docked?: boolean;
  transitions?: boolean;
  touch?: boolean;
  dragToggleDistance?: number;
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
}
