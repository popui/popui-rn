import React from 'react'

import { Button, ButtonArea, WingBlank, Toptips } from 'popui-rn'


export interface IProps  {

}




export default class TooltipsScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Tooltips',
    }

    private constructor() {
        super()
        this.state = {
            toptipsVisible: false,
        }
        this.onToptipsShow = this.onToptipsShow.bind(this)
    }

    render() {
        return (
            <WingBlank hasPadddingHorizontal hasPaddingTop>
                <ButtonArea>
                    <Button type="primary" onPress={() => this.onToptipsShow()}>Toptips</Button>
                </ButtonArea>
                <Toptips visible={this.state.toptipsVisible}>
                    Test Toptips!
                </Toptips>
            </WingBlank>
        )
    }

    private onToptipsShow() {
        this.setState({ toptipsVisible: true })
        setTimeout(() => this.setState({ toptipsVisible: false }), 3000)
    }
}
