import { Grids, PageWrapper } from 'popui'
import screensData from 'demoModule/screens/Grid/data'
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Image } from 'react-native'

export interface IProps extends NavigationScreenProps<void> {}
import { observer } from 'mobx-react'

@observer
export default class GridScreen extends React.Component<IProps, any> {
  static navigationOptions = {
    title: 'Grid'
  }

  render() {
    return (
      <PageWrapper>
        <Grids data={this.getGrids()} />
      </PageWrapper>
    )
  }

  /**
   *  根据配置生成单个 item
   * @param item
   * @returns {{icon: any, label: any, onPress: (()=>undefined)}}
   */
  private getGridItem(item) {
    const { iconUrl, title, targetScreenName } = item
    const { navigate } = this.props.navigation
    return {
      icon: (
        <Image style={{ width: 28, height: 28 }} source={{ uri: iconUrl }} />
      ),
      label: title,
      onPress() {
        navigate(targetScreenName)
      }
    }
  }

  /**
   * 根据配置生成 Grid 组件的参数, 组件列表
   * @returns {Array}
   */
  private getGrids() {
    const grids = []
    screensData.map(item => {
      const gridItem = this.getGridItem(item)
      grids.push(gridItem)
    })
    return grids
  }
}
