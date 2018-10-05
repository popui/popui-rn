import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Text } from 'react-native'
import { Footer, FooterLink, FooterLinks, FooterText, PageWrapper } from 'popui'

import stylekit from 'react-native-stylekit'

const S = stylekit({})
const termOfUseTitle = 'Term of Service'
const privacyPoclicyTitle = 'Privacy Poclicy'

export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class FooterScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Footer',
    }

    renderFooter2() {
        return (
            <Footer style={S.mb30}>
                <FooterLinks>
                    <FooterLink onPress={() => {
                    }}>{'底部链接'}</FooterLink>
                </FooterLinks>
                <FooterText>Copyright &copy; 2008-{(new Date()).getFullYear()} Company.</FooterText>
                <FooterText>All Rights Reserved.</FooterText>
            </Footer>
        )
    }

    renderFooter3() {
        return (
            <Footer style={S.mb30}>
                <FooterLinks>
                    <FooterLink onPress={() => {
                    }}>{termOfUseTitle}</FooterLink>
                    <Text>And</Text>
                    <FooterLink access onPress={() => {
                    }}>{privacyPoclicyTitle}</FooterLink>
                </FooterLinks>
                <FooterText>Copyright &copy; 2008-{(new Date()).getFullYear()} Company.</FooterText>
                <FooterText>All Rights Reserved.</FooterText>
            </Footer>
        )
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal hasPaddingTop>
                {this.renderFooter1()}
                {this.renderFooter2()}
                {this.renderFooter3()}
            </PageWrapper>
        )
    }

    private renderFooter1() {
        return (
            <Footer style={S.mb30}>
                <FooterText>Copyright &copy; 2008-{(new Date()).getFullYear()} Company.</FooterText>
            </Footer>
        )
    }
}
