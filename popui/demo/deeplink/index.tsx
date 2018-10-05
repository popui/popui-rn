import { Button, ButtonArea, PageWrapper } from 'popui'
import React from 'react'

import { openUrl } from 'linkUtils'

export interface IProps  {

}




export default class DeepLinkScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'DeepLink',
    }

    render() {
        return (
            <PageWrapper>
                {this.renderButtonItem('GO TO: Navigation Playground', 'exp://exp.host/@huangciyin/NavigationPlayground')}
                {this.renderButtonItem('GO TO: Native Component List', 'exp://exp.host/@community/native-component-list')}
                {this.renderButtonItem('Error Demo', 'foo:bar?a=123', 'warn')}
            </PageWrapper>
        )
    }

    private renderButtonItem(title: string, url: string, type? = '') {
        return (<ButtonArea>
            <Button type={type} onPress={() => openUrl(url)}>{title}</Button>
        </ButtonArea>)
    }
}
