import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cross from 'react-native-vector-icons/Entypo';
import HomeScreen from '../Screens/Coach/SubscribedUsersHome/CoachHomeScreen';
const Tab = createBottomTabNavigator();


function UserRequest() {
    return (
      <ScrollView>
      <View>
        
        <View style={{flexDirection:'row', marginTop:40, marginHorizontal:20}}>
          <View>
            <Image
            source={require('../Assets/userAvatar.png')}
            style={{height:80, width:80, alignContent:'center',
              opacity:100,
              borderRadius:40, marginBottom:10,
            }}
            />
          </View>
          <View style={{paddingLeft:20}}>
            <Text>Noor</Text>
            <Text>Wants to Connect </Text>
          
          </View>
          <View style={{flexDirection:'row', paddingLeft:40 , paddingVertical:10}}>
            <View style={{}}>
            <TouchableOpacity
            style={{
              backgroundColor: '#0aada8',
              padding:10,
              width:40,
              borderRadius:10
            }}
            >
            <Ionicons name='ios-checkmark-done' size={20}/>
          </TouchableOpacity>
            </View>
          <View style={{paddingLeft:10}}>  
          <TouchableOpacity
            style={{
              backgroundColor: '#ff726f',
              padding:10,
              width:40,
              borderRadius:10
            }}
          >
            <Cross name='cross' size={20}/>
          </TouchableOpacity> 
            </View>
            </View>
        </View>
        <View style={{flexDirection:'row', marginTop:20, marginHorizontal:20}}>
          <View>
            <Image
            source={require('../Assets/userAvatar.png')}
            style={{height:80, width:80, alignContent:'center',
              opacity:100,
              borderRadius:40, marginBottom:10,
            }}
            />
          </View>
          <View style={{paddingLeft:20}}>
          <Text>Laiba</Text>
            <Text>Wants to Connect </Text>
          </View>
          <View style={{flexDirection:'row', paddingLeft:40 , paddingVertical:10}}>
            <View style={{}}>
            <TouchableOpacity
            style={{
              backgroundColor: '#0aada8',
              padding:10,
              width:40,
              borderRadius:10
            }}
            >
            <Ionicons name='ios-checkmark-done' size={20}/>
          </TouchableOpacity>
            </View>
          <View style={{paddingLeft:10}}>  
          <TouchableOpacity
            style={{
              backgroundColor: '#ff726f',
              padding:10,
              width:40,
              borderRadius:10
            }}
          >
            <Cross name='cross' size={20}/>
          </TouchableOpacity> 
            </View>
            </View>
        </View>
        <View style={{flexDirection:'row', marginTop:20, marginHorizontal:20}}>
          <View>
            <Image
            source={require('../Assets/userAvatar.png')}
            style={{height:80, width:80, alignContent:'center',
              opacity:100,
              borderRadius:40, marginBottom:10,
            }}
            />
          </View>
          <View style={{paddingLeft:20}}>
          <Text>fizza</Text>
            <Text>Wants to Connect </Text>
          </View>
          <View style={{flexDirection:'row', paddingLeft:40 , paddingVertical:10}}>
            <View style={{}}>
            <TouchableOpacity
            style={{
              backgroundColor: '#0aada8',
              padding:10,
              width:40,
              borderRadius:10
            }}
            >
            <Ionicons name='ios-checkmark-done' size={20}/>
          </TouchableOpacity>
            </View>
          <View style={{paddingLeft:10}}>  
          <TouchableOpacity
            style={{
              backgroundColor: '#ff726f',
              padding:10,
              width:40,
              borderRadius:10
            }}
          >
            <Cross name='cross' size={20}/>
          </TouchableOpacity> 
            </View>
            </View>
        </View>
        <View style={{flexDirection:'row', marginTop:20, marginHorizontal:20}}>
          <View>
            <Image
            source={require('../Assets/userAvatar.png')}
            style={{height:80, width:80, alignContent:'center',
              opacity:100,
              borderRadius:40, marginBottom:10,
            }}
            />
          </View>
          <View style={{paddingLeft:20}}>
          <Text>Hamna</Text>
            <Text>Wants to Connect </Text>
          </View>
          <View style={{flexDirection:'row', paddingLeft:40 , paddingVertical:10}}>
            <View style={{}}>
            <TouchableOpacity
            style={{
              backgroundColor: '#0aada8',
              padding:10,
              width:40,
              borderRadius:10
            }}
            >
            <Ionicons name='ios-checkmark-done' size={20}/>
          </TouchableOpacity>
            </View>
          <View style={{paddingLeft:10}}>  
          <TouchableOpacity
            style={{
              backgroundColor: '#ff726f',
              padding:10,
              width:40,
              borderRadius:10
            }}
          >
            <Cross name='cross' size={20}/>
          </TouchableOpacity> 
            </View>
            </View>
        </View>
        <View style={{flexDirection:'row', marginTop:20, marginHorizontal:20}}>
          <View>
            <Image
            source={require('../Assets/userAvatar.png')}
            style={{height:80, width:80, alignContent:'center',
              opacity:100,
              borderRadius:40, marginBottom:10,
            }}
            />
          </View>
          <View style={{paddingLeft:20}}>
          <Text>Fatima</Text>
            <Text>Wants to Connect </Text>
          </View>
          <View style={{flexDirection:'row', paddingLeft:40 , paddingVertical:10}}>
            <View style={{}}>
            <TouchableOpacity
            style={{
              backgroundColor: '#0aada8',
              padding:10,
              width:40,
              borderRadius:10
            }}
            >
            <Ionicons name='ios-checkmark-done' size={20}/>
          </TouchableOpacity>
            </View>
          <View style={{paddingLeft:10}}>  
          <TouchableOpacity
            style={{
              backgroundColor: '#ff726f',
              padding:10,
              width:40,
              borderRadius:10
            }}
          >
            <Cross name='cross' size={20}/>
          </TouchableOpacity> 
            </View>
            </View>
        </View>
        
      </View>
      </ScrollView>
    );
  }
  
  function ChatScreen() {
    return (
      <View style={{flexDirection:'column', justifyContent:'space-between'}}>
        <View style={{ padding:20, justifyContent:'center'}}>  
           
            <Text style={{width:360,paddingTop:100,color:'#E26F1E',fontSize:20,textAlign:'center',paddingBottom:10}}> Will customize the ChatScreen after mid </Text>
        </View>
        <View style={{ flexDirection:'row', position:'absolute', top:580, marginHorizontal:10}}>
          <TextInput
          placeholder='Enter message to send'
          style={{fontSize:14, borderColor:'#E26F1E', borderWidth:1, borderRadius:10,}}
          width={300}
          height={40}
          />
          <Ionicons style={{paddingLeft:5}} name='send-outline' size={40} color="#E26F1E"/>
        </View>
      </View>  
    );
  }

const CoachBottomNavigation = () =>{
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
      {/* <Tab.Screen name="UserRequest" component={UserRequest}  
      options={{
        tabBarBadge: 6,
        tabBarBadgeStyle: {backgroundColor:'red'},
        tabBarIcon: ({color, size}) => (
          <Feather name="user-plus" color={color} size={size} />
        )
      }}/> */}
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" color={color} size={size} />
        )
      }}/>
      <Tab.Screen name="ChatScreen" component={ChatScreen}  options={{
        tabBarBadge: 9,
        tabBarBadgeStyle: {backgroundColor:'red'},
        tabBarIcon: ({color, size}) => (
          <Material name="chat-outline" color={color} size={size} />
        )
      }}/> 
    </Tab.Navigator>
  );
}

export default CoachBottomNavigation;