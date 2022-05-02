import React from 'react';

import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import SafeAreaView from "react-native-web/dist/exports/SafeAreaView";
import AsyncStorage from "@react-native-community/async-storage";
import Api from "./Api";


export default class SignUp extends React.Component {

    state = {success: false}

    data ={email: '', password: '', password2: '', username: ''}

    constructor(props) {
        super(props);
        this.access=new Api();
    }

    changeMail = (email) => {
        this.data.email = email;
    }

    changePass = (pass) => {
        this.data.password = pass;
    }

    changePass2 = (pass) => {
        this.data.password2 = pass;
    }

    changeUsername = (name) => {
        this.data.username = name;
    }

    sign = (e) => {
        e.preventDefault();
        const {email, password, password2, username} = this.data;
        if (email !== "" && password !== "" && password2 !== '' && password2 === password && username !== '') {

            this.access.post("signup", {email, password, username}).then(async (res) => {

                let {result} = res;
                if (result || result === 'true') {
                    this.setState({success: true});
                }
            }).catch( (err) =>{
                console.log(err);
            });
        }
    }

    render() {
        const {success} = this.state;
        return (
            <SafeAreaView style={styles.signing}>
                <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require('../assets/logo.png')}/>
                            <Text style={styles.title}>Please Fill in the Information!</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={this.changeUsername} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Username'/>
                            <TextInput onChangeText={this.changeMail} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Email'/>
                            <TextInput onChangeText={this.changePass} secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Password'/>
                            <TextInput onChangeText={this.changePass2} secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Confirm Password'>

                            </TextInput>

                        </View>
                        <TouchableOpacity onPress={this.sign} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>

                    </View>
                    {(success) ? <View><Text>{'Signup Successful, click signin below.'}</Text></View> : <Text/>}
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Do you have an account already?</Text>
                        <View style={styles.signinButton}>
                            <Button
                                title="Sign In"
                                onPress={() =>
                                    this.props.navigation.navigate('SignIn')
                                }
                            /></View>
                    </View>

                </ImageBackground>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    signing: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        marginTop: 40,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 20,
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

    inputContainer: {
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
    },
    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        marginTop: -50,
        color: '#ffffff',
        fontSize:15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    signinButton: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'block',
    }
});
