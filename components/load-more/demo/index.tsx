import React from 'react'


import { LoadMore, GapV } from 'popui-rn'


export interface IProps  {

}




export default class LoadMoreScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'LoadMore',
    }

    render() {
        return (
            <GapV hasPadddingHorizontal>
                <LoadMore loading={!false}>Loading</LoadMore>
                <LoadMore showLine={!false}>No Data</LoadMore>
                <LoadMore showLine={!false} showDot={!false}/>
            </GapV>
        )
    }
}
