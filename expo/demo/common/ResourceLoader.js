var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import liraries
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Font } from 'expo';
// create a component
class ResourceLoader extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            loading: true
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Font.loadAsync({
                'weui': require('./../../../assets/fonts/Weui.ttf'),
            });
            this.setState({ loading: false });
        });
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator />;
        }
        return this.props.children;
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
//make this component available to the app
export default ResourceLoader;
