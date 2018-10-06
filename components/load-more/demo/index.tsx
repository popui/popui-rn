import React from 'react'


import { LoadMore, WingBlank } from 'popui-rn'


export interface IProps  {

}




export default class LoadMoreScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'LoadMore',
    }

    render() {
        return (
            <WingBlank hasPadddingHorizontal>
                <LoadMore loading={!false}>Loading</LoadMore>
                <LoadMore showLine={!false}>No Data</LoadMore>
                <LoadMore showLine={!false} showDot={!false}/>
            </WingBlank>
        )
    }
}
