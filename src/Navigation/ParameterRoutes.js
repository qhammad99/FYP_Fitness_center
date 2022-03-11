// parameters sub activities navigation routes
// start after usertype is user in signup
// we end at user home from here

import React from 'react';
import {
    ParameterIntro,
    SignupDob,
    SignupGender,
    SignupBMI 
}from '../Screens/User/UserParameter';
import UserHome from '../Screens/User/Home/home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//intro -> dob -> gender -> BMI -> Home
const ParameterRoutes = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Intro"
                component={ParameterIntro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DOB"
                component={SignupDob}
            />
            <Stack.Screen
                name="Gender"
                component={SignupGender}
            />
            <Stack.Screen
                name="BMI"
                component={SignupBMI}
            />
            {/* <Stack.Screen 
      name="Signup done" maybe add confirmation screen soon
      component={UserParameter} 
    /> */}
            <Stack.Screen
                name="UserHome"
                component={UserHome}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default ParameterRoutes;