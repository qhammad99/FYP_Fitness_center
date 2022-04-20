import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import Colors from '../../../colors/Colors';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const authentication = useContext( AuthContext);

    const clearLoactStorage = async() =>{
        try{
          await AsyncStorage.removeItem('USER');
        }catch(e){
          console.log("error in clearing local storage, ", e);
        }
    
        authentication.dispatch({type:'SIGN_OUT'});
      }

    const logoutAlert = () => {
        Alert.alert(
          'Logout', 
          "Are you sure to logout?",
          [
            {
              text:"CANCEL",
              styles:"cancel"
            },
            {
              text: "YES",
              onPress:()=>clearLoactStorage()
            }
          ]);
      }
    return(
        <View style={{alignItems:'center'}}>
            <Text style={{color: Colors.darkColor}}>Admin Home</Text>

            <TouchableOpacity onPress={logoutAlert}>
                <Text style={{color: Colors.darkColor}}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;