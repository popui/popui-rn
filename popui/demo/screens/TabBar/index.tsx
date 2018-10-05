import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { LoadMore, PageWrapper } from 'popui'


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class TabBarScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'TabBar',
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal>
                <LoadMore showLine={!false}>Todo</LoadMore>
            </PageWrapper>
        )
    }
}
