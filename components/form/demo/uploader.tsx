import React from 'react'
import { Image, Text,ScrollView } from 'react-native'
import CellComp from 'popui-rn/components/cell';
const { Cell, CellBody, CellFooter, CellHeader, Cells, CellsTips, CellsTitle, CellText, } = CellComp

export interface IProps  {

}

export default class UploaderScreen extends React.Component<IProps, any> {
    static navigationOptions = {
        title: 'Uploader',
    }

    private constructor() {
        super()
        this.state = {
            files: [],
        }
        this.handleUploadChange = this.handleUploadChange.bind(this)
    }

    render() {
        return (
            <ScrollView>
                <CellsTitle>图片上传</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                            Todo
                            {/*<Uploader*/}
                            {/*disabled*/}
                            {/*files={this.state.files}*/}
                            {/*onChange={this.handleUploadChange}*/}
                            {/*onFilePress={file => this.setState({file, galleryVisible: true})}*/}
                            {/*/>*/}
                            {/*<Gallery*/}
                            {/*visible={this.state.galleryVisible}*/}
                            {/*source={this.state.file}*/}
                            {/*onPress={() => this.setState({galleryVisible: false})}*/}
                            {/*>*/}
                            {/*<GalleryDelete*/}
                            {/*onPress={() => {*/}
                            {/*this.handleUploadChange(*/}
                            {/*this.state.files.filter(file => file.uri !== this.state.file.uri))*/}
                            {/*this.setState({galleryVisible: false})*/}
                            {/*}}*/}
                            {/*/>*/}
                            {/*</Gallery>*/}
                        </CellBody>
                    </Cell>
                </Cells>
            </ScrollView>
        )
    }

    private handleUploadChange(files) {
        this.setState({ files })
    }
}
