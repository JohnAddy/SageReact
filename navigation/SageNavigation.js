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
import Logout from "../screen/Logout";

const AppDrawer = createDrawerNavigator({ Home: Welcome, Movies, Likes, Logout });
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


