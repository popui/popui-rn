/* tslint:disable:no-unused-variable */
// tslint:disable:jsx-no-multiline-js
import React from 'react'

import { Button, GapH, GapV } from '@popui/popui-rn'

/* tslint:disable:no-console */
export default () => (
  <GapV>
    <GapH />
    <Button>default</Button>
    <GapH />
    <Button disabled>default disabled</Button>
    <GapH />

    <Button type="primary">primary</Button>
    <GapH />
    <Button type="primary" disabled>
      primary disabled
    </Button>
    <GapH />

    <Button type="warning">warning</Button>
    <GapH />
    <Button type="warning" disabled>
      warning disabled
    </Button>
    <GapH />

    <Button loading>loading button</Button>

    <Button activeStyle={false}>无点击反馈</Button>
    <GapH />
    <Button activeStyle={{ backgroundColor: 'red' }}>
      custom feedback style
    </Button>
    <GapH />

    <GapV
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>
        ghost disabled
      </Button>
      <Button type="ghost" size="small">
        ghost
      </Button>
    </GapV>
  </GapV>
)
