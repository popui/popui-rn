import React from 'react'

import { Text, View } from 'react-native'
import { Card, GapH, GapV } from '@popui/popui-rn'

export default class BasicCardExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <GapV size="lg">
          <Card>
            <Card.Header
              title="This is title"
              thumbStyle={{ width: 30, height: 30 }}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>Card Content</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra="footer extra content"
            />
          </Card>
        </GapV>
        <GapH size="lg" />
        <Card full>
          <Card.Header
            title="Full Column"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="this is extra"
          />
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16 }}>Card Content</Text>
            </View>
          </Card.Body>
          <Card.Footer content="footer content" extra="footer extra content" />
        </Card>
      </View>
    )
  }
}
