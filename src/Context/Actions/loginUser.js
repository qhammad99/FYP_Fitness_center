// this action is called in login

import Urls from '../../config/env';
import {ToastAndroid, AlertIOS} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const addToLocatStorage = async(userObj) =>{
    try{
        await AsyncStorage.setItem('USER', JSON.stringify(userObj));
    }catch(e){
        console.log("error while storing in local storage, ", e);
    }
}

export default (emailText, passText)=>(authentication)=>{
    var API_URL= Urls.LoginURL;
            console.log('fetching started');
            axios.post(API_URL, {
                email: emailText,
                password: passText
            })
            .then((response)=>{
                if(response.data.success){
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("User Authenticated", ToastAndroid.SHORT)
                      } else {
                        AlertIOS.alert("User Authenticated");
                      }
                      let userObj = response.data.user;
                      userObj ={...userObj, token: response.data.token};
                      addToLocatStorage(userObj);
                    authentication.dispatch({type:'SIGN_IN', payload:JSON.stringify(userObj)});
                }
                else
                    alert(response.data.message);
            })
            .catch((error)=>{
                alert(" " + error);
            });
}