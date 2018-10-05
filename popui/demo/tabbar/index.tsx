import React from 'react'


import { LoadMore, PageWrapper } from 'popui'


export interface IProps  {

}




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
