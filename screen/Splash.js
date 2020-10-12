import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import axios from "axios";

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync().then(r => {});
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        let bol = false;
        if (userToken !== "") {
            const user = await axios.post('http://localhost:19002/rest/services/check',
                {'token': userToken}).then((res) => {return res;});
            bol = (user === null || user === undefined);
        }

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        await this.props.navigation.navigate(bol ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
export default Splash;
