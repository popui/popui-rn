import { Article, H1, H2, H3, P, PageWrapper, Section } from 'popui'

import React from 'react'



export interface IProps  {

}




export default class ButtonScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Article',
    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal>
                {this.renderContent()}
            </PageWrapper>
        )
    }

    private renderContent() {
        return (<Article>
            <H1>大标题</H1>
            <Section>
                <H2>章标题</H2>
                <Section>
                    <H3>小标题</H3>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute
                    </P>
                </Section>
            </Section>
        </Article>)
    }
}
