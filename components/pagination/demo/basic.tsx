import React from 'react'

import { Pagination, GapH, GapV } from '@popui/popui-rn'

const locale = {
  prevText: '上一步',
  nextText: '下一步',
}

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <GapV size="lg">
        <GapH size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <GapH size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <GapH size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <GapH size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </GapV>
    )
  }
}
