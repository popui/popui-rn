import { Msg, PageWrapper } from 'popui-rn'
import React from 'react'



export interface IProps  {

}




export default class MsgScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Msg',
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal>
                <Msg
                    type="success"
                    title="操作成功"
                    description="内容详情，可根据实际需要安排"
                    buttons={[{
                        type: 'primary',
                        label: '确定',
                        onPress: () => {
                        },
                    }, {
                        type: 'default',
                        label: '取消',
                        onPress: () => {
                        },
                    }]}
                />
            </PageWrapper>
        )
    }
}