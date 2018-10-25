// tslint:disable:jsx-no-multiline-js
import React from 'react'

import { Text, View } from 'react-native'
import { ToggleRow, GapH, ToggleIconCircle } from 'popui-rn'
// const CheckboxRowItem = ToggleRow.CheckboxRowItem;

export default class BasicToggleRowExample extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      value1: true,
      value2: true,
    }
  }
  toggleValue1 = () => {
    const { value1 } = this.state
    this.setState({ value1: !value1 })
  }
  toggleValue2 = () => {
    const { value2 } = this.state
    this.setState({ value2: !value2 })
  }
  renderCircleIcon = (props: any) => {
    return <ToggleIconCircle {...props} />
  }
  render() {
    return (
      <View >
        <Text>ToggleRow CheckBox:</Text>
        <Text>自控</Text>
        <ToggleRow>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </ToggleRow>

        <GapH  />
        <Text>受控</Text>
        <ToggleRow checked={this.state.value1} onChange={this.toggleValue1}>
          Agree agreement
        </ToggleRow>

        <GapH  />
        <ToggleRow disabled>Not selected. Not editable</ToggleRow>

        <GapH  />
        <ToggleRow checked disabled>
          Force selected. Not editable
        </ToggleRow>
        <GapH size="xl" />

        <Text>ToggleRow Circle:</Text>
        <Text>自控</Text>
        <ToggleRow renderIcon={this.renderCircleIcon}>
          Agree agreement agreement agreement agreement agreement agreement
          agreement
        </ToggleRow>

        <GapH  />
        <Text>受控</Text>
        <ToggleRow
          checked={this.state.value2}
          onChange={this.toggleValue2}
          renderIcon={this.renderCircleIcon}
        >
          Agree agreement
        </ToggleRow>

        <GapH  />
        <ToggleRow disabled renderIcon={this.renderCircleIcon}>
          Not selected. Not editable
        </ToggleRow>

        <GapH  />
        <ToggleRow checked disabled renderIcon={this.renderCircleIcon}>
          Force selected. Not editable
        </ToggleRow>
      </View>
    )
  }
}
