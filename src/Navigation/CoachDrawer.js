// Landing screen of Coach
import React from 'react';
import {Image} from 'react-native';
import CoachDrawerContent from '../components/CoachDrawerContent';
import Colors from '../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CoachHomeScreen from '../Screens/Coach/HomeScreen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './../Screens/Coach/Profile'
import ChangePassword from './../Screens/Coach/ChangePassword'

const Drawer = createDrawerNavigator();
  
const CoachDrawer = props => {
    const forDrawer = props.socket
    return (
        <Drawer.Navigator
            initialRouteName='home' 
            drawerContent={(props) => <CoachDrawerContent socket={forDrawer} {...props}/>}
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
                children={()=><CoachHomeScreen socket={props.socket} {...props}/>} 
                // component={CoachHomeScreen} 
                // initialParams={{screen:'CoachHome'}}
                options={{
                    drawerLabel:'Home',
                    drawerIcon:({color})=><Ionicons name="home-outline" size={22} color={color}/>
                }}/>

            <Drawer.Screen 
                name="profile" 
                component={Profile} 
                options={{
                    drawerLabel:'Profile',
                    drawerIcon:({color})=><Ionicons name="person-circle-outline" size={22} color={color}/>
                }}/>

            <Drawer.Screen 
                name="change" 
                component={ChangePassword} 
                options={{
                    drawerLabel:'Change Password',
                    drawerIcon:({color})=><Image source={require('./../Assets/lock.png')} style={{height:20,width:20,tintColor:'#E26F1E'}} />
                }}/>
        </Drawer.Navigator>
    );
};

export default CoachDrawer;