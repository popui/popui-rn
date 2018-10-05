import { View } from 'react-native'
import { PageWrapper, WeuiIcon } from 'popui'
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import stylekit from 'react-native-stylekit'

const SK = stylekit({})


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class IconsScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Icons',
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal hasPaddingTop>
                {this.renderBigIcon('success')}
                {this.renderBigIcon('info')}
                {this.renderBigIcon('warn')}
                {this.renderBigIcon('warn')}
                {this.renderBigIcon('waiting')}
                {this.renderBigIcon('safe_success')}
                {this.renderBigIcon('safe_warn')}
                <View style={[SK.row, SK.plr30, SK.mt10]}>
                    {this.renderSmallIcon('success')}
                    {this.renderSmallIcon('success_circle')}
                    {this.renderSmallIcon('success_no_circle')}
                    {this.renderSmallIcon('info')}
                    {this.renderSmallIcon('info_circle')}
                    {this.renderSmallIcon('waiting')}
                    {this.renderSmallIcon('waiting_circle')}
                </View>
                <View style={[SK.row, SK.plr30, SK.mt10]}>
                    {this.renderSmallIcon('circle')}
                    {this.renderSmallIcon('warn')}
                    {this.renderSmallIcon('download')}
                    {this.renderSmallIcon('search')}
                    {this.renderSmallIcon('clear')}
                    {this.renderSmallIcon('back')}
                    {this.renderSmallIcon('delete')}
                </View>
            </PageWrapper>
        )
    }

    private renderBigIcon(iconName: string) {
        return (<View style={[SK.row, SK.center]}>
            <WeuiIcon name={iconName} msg style={[SK.plr5]}/>
        </View>)
    }

    private renderSmallIcon(iconName: string) {
        return (<WeuiIcon name={iconName} style={[SK.plr5]}/>)
    }
}
