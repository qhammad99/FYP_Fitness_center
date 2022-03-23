// this action is called in login

import Urls from '../../config/env';
import {ToastAndroid, AlertIOS} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            fetch(API_URL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailText,
                    password: passText
                })
            })
            .then((response)=>response.json())
            .then((response)=>{
                if(response.success){
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("User Authenticated", ToastAndroid.SHORT)
                      } else {
                        AlertIOS.alert("User Authenticated");
                      }
                      let userObj = response.user;
                      userObj ={...userObj, token: response.token};
                      addToLocatStorage(userObj);
                    authentication.dispatch({type:'SIGN_IN', payload:JSON.stringify(userObj)});
                }
                else
                    alert(response.message);
            })
            .catch((error)=>{
                alert(" " + error);
            });
}