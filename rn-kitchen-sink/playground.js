import React from 'react';
import { SafeAreaView } from 'react-native'
import NoticeBarExample from 'popui-rn/components/notice-bar/demo/basic'

export default class App extends React.Component {
    render(){
        return <SafeAreaView >
            <NoticeBarExample />
        </SafeAreaView>
    }
}

