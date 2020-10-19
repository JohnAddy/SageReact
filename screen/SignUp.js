import React from 'react';

import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import SafeAreaView from "react-native-web/dist/exports/SafeAreaView";


export default class SignUp extends React.Component {
    render() {
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
                            <TextInput underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Username'/>
                            <TextInput underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Email'/>
                            <TextInput underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Password'/>
                            <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='Confirm Password'>

                            </TextInput>

                        </View>
                        <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>

                    </View>

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
