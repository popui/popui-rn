import { ActionSheet, Button, WeuiButtonArea, GapV, Popup, PopupHeader,View,ScrollView } from 'popui-rn'
import React from 'react'

export interface IProps  {

}


export default class ActionSheetScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'ActionSheet',
    }

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            popupVisible: false,
            galleryVisible: false,
        }
        this.showActionSheet = this.showActionSheet.bind(this)
        this.hideActionSheet = this.hideActionSheet.bind(this)
    }

    render() {
        return (
            <ScrollView>
                <WeuiButtonArea>
                    <Button
                        type="primary"
                        onPress={this.showActionSheet}
                    >点击弹出 ActionSheet</Button>
                </WeuiButtonArea>
                <WeuiButtonArea>
                    <Button
                        type="primary"
                        onPress={() => this.setState({ popupVisible: true })}
                    >点击弹出 Popup</Button>
                </WeuiButtonArea>
                <WeuiButtonArea>
                    <Button
                        type="primary"
                        onPress={() => this.setState({ galleryVisible: true })}
                    >点击弹出 Gallery</Button>
                </WeuiButtonArea>
                <ActionSheet
                    autoDectect={false}
                    type="android"
                    visible={this.state.visible}
                    onClose={this.hideActionSheet}
                    menus={[
                        {
                            type: 'default',
                            label: '拍照',
                            onPress: this.hideActionSheet,
                        }, {
                            type: 'default',
                            label: '从手机相册选择',
                            onPress: this.hideActionSheet,
                        },
                    ]}
                    actions={[
                        {
                            type: 'default',
                            label: '取消',
                            onPress: this.hideActionSheet,
                        },
                    ]}
                />
                <Popup
                    visible={this.state.popupVisible}
                    onClose={() => this.setState({ popupVisible: false })}
                >
                    <PopupHeader left={{ label: '取消' }} right={{ label: '完成' }}/>
                    <View style={{ padding: 10, height: 200 }}>
                        <Button
                            type="primary"
                            onPress={this.showActionSheet}
                        >点击弹出 ActionSheet</Button>
                    </View>
                </Popup>
                {/*<Gallery*/}
                {/*visible={this.state.galleryVisible}*/}
                {/*source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}*/}
                {/*onPress={() => this.setState({galleryVisible: false})}*/}
                {/*><GalleryDelete onPress={() => console.log('1')}/></Gallery>*/}
            </ScrollView>
        )
    }

    private showActionSheet() {
        this.setState({
            visible: true,
        })
    }

    private hideActionSheet() {
        this.setState({
            visible: false,
        })
    }
}
