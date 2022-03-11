// Landing screen of User
import React from 'react';
import CoachDrawerContent from '../components/CoachDrawerContent';
import Colors from '../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CoachHomeScreen from '../Screens/Coach/HomeScreen/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const CoachDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='home' 
            drawerContent={props => <CoachDrawerContent {...props} />}
            screenOptions={{
                headerShown:false,
                drawerActiveTintColor: Colors.selectedColor,
                drawerInactiveTintColor:Colors.primary,
                drawerLabelStyle:{
                    marginLeft:-25,
                    fontSize:15
                }
            }}>

            <Drawer.Screen 
                name="home" 
                component={CoachHomeScreen} 
                // initialParams={{screen:'CoachHome'}}
                options={{
                    drawerLabel:'Home',
                    drawerIcon:({color})=><Ionicons name="home-outline" size={22} color={color}/>
                }}/>

        </Drawer.Navigator>
    );
};

export default CoachDrawer;