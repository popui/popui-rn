import React from 'react'
;
import {View} from 'react-native'
import { WeuiButtonPreview,  Preview, PreviewBody, PreviewFooter, PreviewHeader,
  PreviewItem, PreviewLabel, PreviewValue } from 'popui-rn'
export interface IProps  {

}


export default class PreviewScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Preview',
    }

    render() {
        return (
            <View>
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
                        <WeuiButtonPreview primary={!false}>Action</WeuiButtonPreview>
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
                        <WeuiButtonPreview>Action</WeuiButtonPreview>
                        <WeuiButtonPreview primary={!false}>Action</WeuiButtonPreview>
                    </PreviewFooter>
                </Preview>
            </View>
        )
    }
}
