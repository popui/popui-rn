import React from 'react'
import {ScrollView} from 'react-native'
import { ButtonWeui, WingBlank, Preview as PreviewComps } from 'popui-rn'
const {Preview, PreviewBody, PreviewFooter, PreviewHeader, 
  PreviewItem, PreviewLabel, PreviewValue} = PreviewComps
const {ButtonPreview} = ButtonWeui
export interface IProps  {

}

export default class PreviewScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Preview',
    }

    render() {
        return (
            <ScrollView>
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
            </ScrollView>
        )
    }
}
