import React from 'react'

import { Button, ButtonArea, PageWrapper, Popup, PopupHeader } from 'popui'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  popup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
})

export interface IProps  {}



export default class PopupScreen extends React.Component<IProps, any> {
  static navigationOptions = {
    title: 'Popup'
  }
  private showPopup = () => {
    this.setState({
      popupVisible: true
    })
  }
  private hidePopup = () => {
    this.setState({
      popupVisible: false
    })
  }

  private constructor(props: any) {
    super(props)
    this.state = {
      popupVisible: false
    }
  }

  render() {
    return (
      <PageWrapper hasPadddingHorizontal>
        <ButtonArea>
          <Button type="primary" onPress={() => this.showPopup()}>
            Show Popup
          </Button>
        </ButtonArea>
        <Popup visible={this.state.popupVisible} onClose={this.hidePopup}>
          <PopupHeader
            left={{
              label: 'left'
            }}
            right={{
              label: 'right'
            }}
          />
          <View style={styles.popup}>
            <Text> I am in Popup!</Text>
          </View>
        </Popup>
      </PageWrapper>
    )
  }
}
