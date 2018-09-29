import React from 'react';
import { SafeAreaView } from 'react-native'
import NoticeBarExample from '../components/notice-bar/demo/basic.native'

export default class App extends React.Component {
    render(){
        return <NoticeBarExample />
    }
    // render(){
    //     return <SafeAreaView >
    //         <NoticeBarExample />
    //     </SafeAreaView>
    // }
}

