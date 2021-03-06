import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Grid, GapH } from '@popui/popui-rn'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://weui.io/images/icon_tabbar.png',
  text: `Item ${i}`,
}))

export default class BasicGridExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView>
        <View style={[{ padding: 10, backgroundColor: '#eee' }]}>
          <Text>Simple</Text>
        </View>
        <Grid data={data} hasLine={false} />
        <GapH size="xl" />

        <View style={[{ padding: 10, backgroundColor: '#eee' }]}>
          <Text>Custom GridCell Style</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          containerStyle={{ backgroundColor: '#fbf9fe' }}
          itemStyle={{ height: 150 }}
        />
        <GapH size="xl" />

        <View style={[{ padding: 10, backgroundColor: '#eee' }]}>
          <Text>Carousel</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          onClick={(_el: any, index: any) => alert(index)}
        />
        <GapH size="xl" />
      </ScrollView>
    )
  }
}
