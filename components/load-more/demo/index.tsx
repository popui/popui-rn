import React from 'react'
import { observer } from 'mobx-react';
import { LoadMore, ScrollView } from 'popui-rn'

export interface IProps  {

}




@observer
export default class LoadMoreScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'LoadMore',
    }

    render() {
        return (
            <ScrollView>
                <LoadMore loading={!false}>Loading</LoadMore>
                <LoadMore showLine={!false}>No Data</LoadMore>
                <LoadMore showLine={!false} showDot={!false}/>
            </ScrollView>
        )
    }
}