import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { LoadMore, PageWrapper } from 'popui'


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class NavBarScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'NavBar',
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal>
                <LoadMore showLine={!false}>Todo</LoadMore>
            </PageWrapper>
        )
    }
}
