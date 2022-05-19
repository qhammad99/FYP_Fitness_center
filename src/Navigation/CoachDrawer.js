// Landing screen of User
import React from 'react';
import CoachDrawerContent from '../components/CoachDrawerContent';
import Colors from '../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CoachHomeScreen from '../Screens/Coach/HomeScreen/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


function Profile({navigation}) {
    return (
      <View style={{}}>
        
        <View style={{marginTop:50 ,justifyContent:'center',alignItems:'center', paddingLeft:20,flexDirection:'row'}}>
          <Image
            source={require('../Assets/userAvatar.png')}
            style={{height:100, width:100,
              opacity:100,
              borderRadius:40, marginBottom:10,
            }}
          />
          <Ionicons name="camera-outline"  size={20} style={{paddingTop:85 }} />
        </View>
        
        <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:40, marginTop:30}}>
            <Text style={{fontSize:16, paddingTop:5,color:'#E26F1E'}}>Name</Text>
            <TextInput
            style={{fontSize:14, borderColor:'#E26F1E', borderWidth:1, borderRadius:10}}
            width={200}
            height={40}
            placeholder='Enter Your Name'
            color="#E26F1E"
            />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:40, marginTop:20}}>
            <Text style={{fontSize:16, paddingTop:5,color:'#E26F1E'}}>Email:</Text>
            <TextInput
            style={{fontSize:14, borderColor:'#E26F1E', borderWidth:1, borderRadius:10}}
            width={200}
            height={40}
            placeholder='Enter Your Email'
            color="#E26F1E"
            />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:40, marginTop:20}}>
            <Text style={{fontSize:14, paddingTop:5,color:'#E26F1E'}}>Experience:</Text>
            <TextInput
            placeholder='Enter Your Experience'
            style={{height:100,textAlign:'justify',textAlignVertical:'top',padding:10,fontSize:16, borderColor:'#E26F1E', borderWidth:1, borderRadius:10}}
            multiline={true}
            width={200}
            numberOfLines={4}
            returnKeyType='done'
            color="#E26F1E"
            />
          </View>
        <View style={{flexDirection:'row', justifyContent:'center',marginHorizontal:40, marginTop:60}}>
        <TouchableOpacity
            style={{
              backgroundColor: '#E26F1E',
              padding:10,
              width:170,
              borderRadius:10
            }}
          >
            <Text style={{fontSize:18, textAlign:'center', color:'#ffff'}}> Update</Text>  
          </TouchableOpacity>  
        </View>
        
      </View>
    );
  }
  
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
        </Drawer.Navigator>
    );
};

export default CoachDrawer;