import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Cell, CellBody, Cells, CellsTitle, PageWrapper } from 'popui'


export interface IProps extends NavigationScreenProps<void> {

}

import { observer } from 'mobx-react'

@observer
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
            <PageWrapper>
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
            </PageWrapper>
        )
    }

    private handleUploadChange(files) {
        this.setState({ files })
    }
}
