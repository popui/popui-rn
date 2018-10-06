import { View,ScrollView,Text } from 'react-native'
import {  IconWeui } from 'popui-rn'
import React from 'react'
import stylekit from 'react-native-stylekit'

const SK = stylekit({})

export interface IProps  {

}

export default class IconsScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Icons',
    }
    render() {
        return (
            <ScrollView>
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
            </ScrollView>
        )
    }

    private renderBigIcon(iconName: string) {
        return (<View style={[SK.row, SK.center]}>
              <Text>{iconName}</Text>
            <IconWeui name={iconName} msg style={[SK.plr5]}/>
        </View>)
    }

    private renderSmallIcon(iconName: string) {
        return (<IconWeui name={iconName} style={[SK.plr5]}/>)
    }
}
