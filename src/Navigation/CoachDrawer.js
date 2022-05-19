// Landing screen of User
import React from 'react';
import CoachDrawerContent from '../components/CoachDrawerContent';
import Colors from '../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CoachHomeScreen from '../Screens/Coach/HomeScreen/HomeScreen';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './../Screens/Coach/Profile'
import About from './../Screens/Coach/About'
import ChangePassword from './../Screens/Coach/ChangePassword'



const Drawer = createDrawerNavigator();


// function Profile({navigation}) {
//     // return (
     
//     // );
//   }
  
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

            <Drawer.Screen 
                name="profile" 
                component={Profile} 
                options={{
                    drawerLabel:'Profile',
                    drawerIcon:({color})=><Ionicons name="person-circle-outline" size={22} color={color}/>
                }}/>
                 <Drawer.Screen 
                name="about" 
                component={About} 
                options={{
                    drawerLabel:'About',
                    drawerIcon:({color})=><Image source={require('./../Assets/about.png')} style={{height:20,width:20,tintColor:'#E26F1E'}} />
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