import React from 'react'
;
import {View,ScrollView} from 'react-native'
import { WeuiButtonPreview,  Preview, PreviewBody, PreviewFooter, PreviewHeader,
  PreviewItem, PreviewLabel, PreviewValue } from "@popui/popui-rn"
export interface IProps  {

}


export default class PreviewScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Preview',
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#ddd',paddingBottom:50}}>
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
                        <WeuiButtonPreview primary={!false}>OK</WeuiButtonPreview>
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
                        <WeuiButtonPreview>辅助操作</WeuiButtonPreview>
                        <WeuiButtonPreview primary={!false}>主操作</WeuiButtonPreview>
                    </PreviewFooter>
                </Preview>
            </ScrollView>
        )
    }
}
