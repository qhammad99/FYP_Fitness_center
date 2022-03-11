// this action is called in signup password

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

export default (account)=>(authentication)=>{
    var API_URL= Urls.SignupURL;
    console.log('fetching started');
    fetch(API_URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name : account.firstName+" "+account.secondName,
            email : account.email,
            password: account.password,
            u_type: account.userType,
            coach_id: null
        })
    })
    .then((response)=>response.json())
    .then((response)=>{
        if(!response.message){
            if (Platform.OS === 'android') {
                ToastAndroid.show("Account Created", ToastAndroid.SHORT)
                } else {
                AlertIOS.alert("Account Created");
                }
                let obj={
                    u_type: account.userType,
                    firstName: account.firstName,
                    secondName: account.secondName,
                    password: account.password,
                    u_type: account.userType,
                    coach_id: null
                }
                addToLocatStorage(obj); 
                authentication.dispatch({type:'SIGN_UP', payload:JSON.stringify(obj)})
        }
        else
            alert(response.message);
    })
    .catch((error)=>{
        alert(" " + error);
    });
}