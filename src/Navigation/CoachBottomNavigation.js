import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/Coach/SubscribedUsersHome/CoachHomeScreen';
import Users from '../Screens/Coach/Users';
import Chat from '../Screens/Coach/Chat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ChatScreen(props) {
  return (
    <Stack.Navigator initialRouteName='Users'>
        <Stack.Screen name='Users' 
        // component={Users} 
        children={()=><Users socket={props.socket} {...props} />}
        />

        <Stack.Screen name='Chat' 
        // component={Chat} 
        children={({route})=><Chat socket={props.socket} userInfo={route.params.user} />}
        options={({route})=> ({
          title: route.params.user.name
        })}/>
      </Stack.Navigator>
  );
}

const CoachBottomNavigation = props =>{
  return(
    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
      headerShown: false,
      tabBarShowLabel:false,
      tabBarStyle: {backgroundColor:  '#E26F1E'},
      tabBarInactiveTintColor: '#ffffff',
      tabBarActiveTintColor: '#D03715',
    }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" color={color} size={size} />
        )
      }}/>
      <Tab.Screen name="ChatScreen" 
        children={()=><ChatScreen socket={props.socket} {...props} />}
        // component={ChatScreen}  
        options={{
        // tabBarBadge: 9,
        // tabBarBadgeStyle: {backgroundColor:'red'},
        tabBarIcon: ({color, size}) => (
          <Material name="chat-outline" color={color} size={size} />
        )
      }}/> 
    </Tab.Navigator>
  );
}

export default CoachBottomNavigation;