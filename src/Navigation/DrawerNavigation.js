// Landing screen of User
import React from 'react';
import UserBottomNavigation from '../Navigation/UserBottomNavigation';
import DrawerContent from '../components/DrawerContent';
import Colors from '../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Profile from '../Screens/User/Profile/Profile';
import Notifications from '../Screens/User/Notifications/Notifications';
import Settings from '../Screens/User/Settings/Settings';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName='home' 
            drawerContent={props => <DrawerContent {...props} />}
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
                name="profile" 
                component={Profile} 
                options={{
                    drawerLabel:'Profile',
                    drawerIcon:({color})=><Ionicons name="person-circle-outline" size={22} color={color}/>
                }}/>
            
            <Drawer.Screen 
                name="home" 
                component={UserBottomNavigation} 
                initialParams={{screen:'Home'}}
                options={{
                    drawerLabel:'Home',
                    drawerIcon:({color})=><Ionicons name="home-outline" size={22} color={color}/>
                }}/>

            <Drawer.Screen 
                name="notification" 
                component={Notifications} 
                options={{
                    drawerLabel:'Notifications',
                    drawerIcon:({color})=><Ionicons name="notifications-outline" size={22} color={color}/>
                }}/>
            
            <Drawer.Screen 
                name="settings" 
                component={Settings} 
                options={{
                    drawerLabel:'Settigns',
                    drawerIcon:({color})=><Ionicons name="settings-outline" size={22} color={color}/>
                }}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;