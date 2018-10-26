import React, { ReactNode } from 'react'

export interface BriefProps {
  children?: ReactNode
  wrap?: boolean
  style?: React.CSSProperties | {} | Array<{}>
}
