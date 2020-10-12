import React from 'react';

import {StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ImageBackground} from 'react-native';
import axios from "axios";

export default class SignIn extends React.Component {
    data ={email: '', password: ''}
    login = () => {
        if (this.data.email !== "" && this.data.password !== "") {
            axios.post('https://sagejava.appspot.com/rest/services/login', this.data).then((res) => {
                console.log(res)
            });
        }
    }
    changeMail = (email) => {
        this.data.email = email;
    }
    changePass = (pass) => {
        this.data.password = pass;
    }

    render(){
        return(

            <View style={styles.container}>
                <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require('../assets/logo.png')}/>
                            <Text style={styles.title}>Welcome to my world of movies!</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={this.changeMail} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Email Address'/>
                            <TextInput onChangeText={this.changePass} secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Password'/>



                        </View>
                        <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        Alert.alert("Logged in successfully");
                    </View>
                </ImageBackground>
            </View>



        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center'
    },

    content:{
        alignItems: 'center'
    },

    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 170,
        height: 120


    },
    title: {
        color: '#fff',
        marginTop: 10,
        marginBottom: 20
    },

    inputContainer:{
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderColor: '#fff',

    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.7)'


    },
    buttonContainer: {
        width: 150,
        margin: 20,
        padding: 10,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)',

    },
    buttonText: {
        fontSize: 16,

        textAlign: 'center',
    }



});
