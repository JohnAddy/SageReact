/*import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Welcome from '../screen/Welcome';
import SignUp from "../screen/SignUp";
import SignIn from "../screen/SignIn";
import {SplashScreen} from "expo/build/removed.web";


const SageNavigation = createDrawerNavigator({

    welcome: {Welcome},
    signIn: {SignIn},
    signUp: {SignUp},
},
    {
        initialRouteName: 'Welcome'
    });
export default createAppContainer(SageNavigation);*/
import { createSwitchNavigator } from 'react-navigation';
import Welcome from "../screen/Welcome";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import Splash from "../screen/Splash";
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Movies from "../screen/Movies";
import Likes from "../screen/Likes";
import MovieDetails from "../screen/helper";
import {createStackNavigator} from "react-navigation-stack";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

/*const AppStack = createStackNavigator({ Home: Welcome, Movie: Movie });
const AuthStack = createStackNavigator({ SignIn: SignIn, SignUp: SignUp });*/
const AppDrawer = createDrawerNavigator({ Home: Welcome, Movies: Movies, Likes: Likes });
const AuthDrawer = createDrawerNavigator({ SignIn: SignIn, SignUp: SignUp });
// const AppPages = createStackNavigator({Movies:{screen:Movies}, Details:{screen:MovieDetails}})

const AppSwitch = createSwitchNavigator(
    {
        AuthLoading: Splash,
        App: AppDrawer,
        Auth: AuthDrawer,
    },

    {
        initialRouteName: 'AuthLoading',
    }
)

export default createAppContainer(AppSwitch);


