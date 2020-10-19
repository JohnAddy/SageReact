import React, {Component} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export default class Logout extends Component{
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await AsyncStorage.setItem('token', '');
        await this.props.navigation.navigate('Auth');
    }

    render() {
        return null;
    }
}