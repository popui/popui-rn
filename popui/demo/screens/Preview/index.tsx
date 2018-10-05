import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import { ButtonPreview, PageWrapper, Preview, PreviewBody, PreviewFooter, PreviewHeader, PreviewItem, PreviewLabel, PreviewValue } from 'popui'


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
export default class PreviewScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Preview',
    }

    render() {
        return (
            <PageWrapper>
                <Preview>
                    <PreviewHeader>
                        <PreviewItem>
                            <PreviewLabel>Total</PreviewLabel>
                            <PreviewValue>$44.50</PreviewValue>
                        </PreviewItem>
                    </PreviewHeader>
                    <PreviewBody>
                        <PreviewItem>
                            <PreviewLabel>Product</PreviewLabel>
                            <PreviewValue>Name</PreviewValue>
                        </PreviewItem>
                        <PreviewItem>
                            <PreviewLabel>Description</PreviewLabel>
                            <PreviewValue>Cras sit amet nibh libero, in gravida </PreviewValue>
                        </PreviewItem>
                        <PreviewItem>
                            <PreviewLabel>Details</PreviewLabel>
                            <PreviewValue>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                            </PreviewValue>
                        </PreviewItem>
                    </PreviewBody>
                    <PreviewFooter>
                        <ButtonPreview primary={!false}>Action</ButtonPreview>
                    </PreviewFooter>
                </Preview>
                <Preview style={{ marginTop: 20 }}>
                    <PreviewHeader>
                        <PreviewItem>
                            <PreviewLabel>Total</PreviewLabel>
                            <PreviewValue>$44.50</PreviewValue>
                        </PreviewItem>
                    </PreviewHeader>
                    <PreviewBody>
                        <PreviewItem>
                            <PreviewLabel>Product</PreviewLabel>
                            <PreviewValue>Name</PreviewValue>
                        </PreviewItem>
                        <PreviewItem>
                            <PreviewLabel>Description</PreviewLabel>
                            <PreviewValue>Cras sit amet nibh libero, in gravida </PreviewValue>
                        </PreviewItem>
                        <PreviewItem>
                            <PreviewLabel>Details</PreviewLabel>
                            <PreviewValue>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                            </PreviewValue>
                        </PreviewItem>
                    </PreviewBody>
                    <PreviewFooter>
                        <ButtonPreview>Action</ButtonPreview>
                        <ButtonPreview primary={!false}>Action</ButtonPreview>
                    </PreviewFooter>
                </Preview>
            </PageWrapper>
        )
    }
}