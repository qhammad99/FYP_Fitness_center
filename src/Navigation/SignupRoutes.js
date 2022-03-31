// sinup sub activities navigation routes
// start when user click create account
// we end up at either coah home or user parameters collection

import React from 'react';
import {
    SignupAccountType,
    SignupName,
    SignupEmail,
    SignupPassword
} from '../Screens/Signup';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// type -> name -> email -> password
const SignupRoutes = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Choose User"
                component={SignupAccountType}
            />
            <Stack.Screen
                name="Name"
                component={SignupName}
            />
            <Stack.Screen
                name="Email"
                component={SignupEmail}
            />
            <Stack.Screen
                name="Password"
                component={SignupPassword}
            />
        </Stack.Navigator>
    );
}

export default SignupRoutes;