import { Article, H1, H2, H3, LoadMore, P, PageWrapper, Section } from 'popui'

import React from 'react'
import { NavigationScreenProps } from 'react-navigation'


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class PageScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Page',
    }

    private constructor() {
        super()
        this.state = {
            loading: true,
        }

    }

    render() {
        return (
            <PageWrapper hasPadddingHorizontal>
                <Article>
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
                </Article>
                {this.renderFooter()}
            </PageWrapper>
        )
    }

    private loadMore() {
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        },         3000)
    }

    private renderFooter() {
        if (this.state.loading) {
            return <LoadMore loading={this.state.loading}>Loading</LoadMore>
        }
        return <LoadMore showLine={true}>No More</LoadMore>
    }

    private componentDidMount() {
        this.loadMore()
    }
}