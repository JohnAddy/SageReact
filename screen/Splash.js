/*import React,{Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ImageBackground,Navigator} from 'react-native';

export default class Splash extends Component
{
    render(){
        return(
            <ImageBackground source={require('../assets/back1.png')} style= {{height: '100%', width: '100%'}}>
                <View
                  style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
                      <Image source={require('../assets/splash.png')}
                      style={{height:100,width:100}}>

                      </Image>

                </View>
            </ImageBackground>

        );
    }
}*/
import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync().then(r => {});
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        await this.props.navigation.navigate(userToken ? 'App' : 'Auth');
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
