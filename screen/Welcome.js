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
<View style={styles.bodt}>
    <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
            <View style={styles.inner}>
                <Text style={styles.testw}>Welcome!</Text>
                <Text style={styles.testt}>{`You are logged in as \n ${user}`}</Text>
                </View>
</ImageBackground>
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
    backgroundImage:{
    flex: 1,
    },

    testw: {

        position: 'relative',
        top: 300,
        textAlign: "center",
        color: 'yellow',
        fontSize: 36,
        margin: 20,
    },

   testt: {

        position: 'relative',
       top: 300,
       textAlign: "center",
       color: '#fff',
       fontSize: 24,
       margin: 20,
    },

    bodt: {
        flex: 1,
        width: '100%',
        height: '100%',
        textAlign: "center",
    },

});
