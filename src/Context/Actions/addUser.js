// this action is called in signup password

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

export default (account)=>(authentication)=>{
    var API_URL= Urls.SignupURL;
    console.log('fetching started');
    axios.post(API_URL, {
            name : account.firstName+" "+account.secondName,
            email : account.email,
            password: account.password,
            u_type: account.userType
    })
    .then((response)=>{
        if(response.data.success){
            if (Platform.OS === 'android') {
                ToastAndroid.show("Account Created", ToastAndroid.SHORT)
                } else {
                AlertIOS.alert("Account Created");
                }
                let obj={
                    user_id: response.data.user_id,
                    u_type: account.userType,
                    firstName: account.firstName,
                    secondName: account.secondName,
                    password: account.password,
                    u_type: account.userType,
                    token: response.data.token,
                    isParameters: 0,
                    isGoal: 0
                }
                addToLocatStorage(obj); 
                authentication.dispatch({type:'SIGN_UP', payload:JSON.stringify(obj)})
        }
        else
            alert(response.data.message);
    })
    .catch((error)=>{
        alert(" " + error.response.data.message);
    });
}