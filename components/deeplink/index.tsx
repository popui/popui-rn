import { Button, WeuiButtonArea, GapV } from 'popui-rn'
import React from 'react'
import { observer } from 'mobx-react';

import { openUrl } from 'linkUtils'

export interface IProps  {

}




@observer
export default class DeepLinkScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'DeepLink',
    }

    render() {
        return (
            <GapV>
                {this.renderButtonItem('GO TO: Navigation Playground', 'exp://exp.host/@huangciyin/NavigationPlayground')}
                {this.renderButtonItem('GO TO: Native Component List', 'exp://exp.host/@community/native-component-list')}
                {this.renderButtonItem('Error Demo', 'foo:bar?a=123', 'warn')}
            </GapV>
        )
    }

    private renderButtonItem(title: string, url: string, type? = '') {
        return (<WeuiButtonArea>
            <Button type={type} onPress={() => openUrl(url)}>{title}</Button>
        </WeuiButtonArea>)
    }
}
