import React from 'react'

import { Button, ButtonArea, PageWrapper, Toptips } from 'popui'


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
            <PageWrapper hasPadddingHorizontal hasPaddingTop>
                <ButtonArea>
                    <Button type="primary" onPress={() => this.onToptipsShow()}>Toptips</Button>
                </ButtonArea>
                <Toptips visible={this.state.toptipsVisible}>
                    Test Toptips!
                </Toptips>
            </PageWrapper>
        )
    }

    private onToptipsShow() {
        this.setState({ toptipsVisible: true })
        setTimeout(() => this.setState({ toptipsVisible: false }), 3000)
    }
}
