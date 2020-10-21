import React,{Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image,ImageBackground, Button} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"


export default class Welcome extends Component
{
    state = {
        user: ''
    }

    async componentDidMount(){
        const user = await AsyncStorage.getItem('email');
        if (user){
            this.setState({user:user})
        }
        console.log(this.state.user)

    }
    render(){
       const { user } = this.state;
        const { navigate } = this.props.navigation;
        return(

            <View style={styles.inner}>
                <Text>{`You are logged in as ${user}`}</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        margin:10,
    },
    inner: {
        marginBottom: 60,
        width: '80%',
        height: '80%',
        },

    welcome: {

        resizeMode: "contain",
        width: 200


    }
});
