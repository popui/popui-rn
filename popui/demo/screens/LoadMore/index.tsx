import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { LoadMore, PageWrapper } from 'popui'


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class LoadMoreScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'LoadMore',
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal>
                <LoadMore loading={!false}>Loading</LoadMore>
                <LoadMore showLine={!false}>No Data</LoadMore>
                <LoadMore showLine={!false} showDot={!false}/>
            </PageWrapper>
        )
    }
}
