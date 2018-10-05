import { Image, Text } from 'react-native'

import {
  Media,
  MediaBody,
  MediaDescription,
  MediaHeader,
  MediaTitle,
  PageWrapper,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  SearchBar
} from 'popui'
import SampleData from 'demoModule/screens/SearchBar/nameDB'
import React from 'react'


const appMsgIcon = (
  <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />
)

export interface IProps  {}



export default class SearchBarScreen extends React.Component<IProps, any> {
  static navigationOptions = {
    title: 'SearchBar'
  }

  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(text) {
    const keywords = [text]
    let results = SampleData.filter(
      /./.test.bind(new RegExp(keywords.join('|'), 'i'))
    )

    if (results.length > 3) results = results.slice(0, 3)
    this.setState({
      results,
      searchText: text
    })
  }

  render() {
    return (
      <PageWrapper>
        <SearchBar onChange={this.handleChange} />
        {!this.state.searchText ? null : (
          <Panel style={{ marginTop: 0 }}>
            <PanelHeader>英文名字</PanelHeader>
            <PanelBody>
              {this.state.results.length > 0 ? (
                this.state.results.map((item, i) => (
                  <Media key={i} type="appmsg">
                    <MediaHeader>{appMsgIcon}</MediaHeader>
                    <MediaBody>
                      <MediaTitle>{item}</MediaTitle>
                      <MediaDescription>
                        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                      </MediaDescription>
                    </MediaBody>
                  </Media>
                ))
              ) : (
                <Media>
                  <Text>找不到了！</Text>
                </Media>
              )}
            </PanelBody>
            <PanelFooter access>查看更多</PanelFooter>
          </Panel>
        )}
      </PageWrapper>
    )
  }
}
