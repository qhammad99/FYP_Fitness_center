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

const adding = async(Account, authentication)=>{
    var API_URL= Urls.SignupURL;
    axios.post(API_URL, {
            name : Account.account.firstName+" "+Account.account.secondName,
            email : Account.account.email,
            password: Account.account.password,
            u_type: Account.account.userType
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
                    u_type: Account.account.userType,
                    name: Account.account.firstName +" "+Account.account.secondName,
                    password: Account.account.password,
                    u_type: Account.account.userType,
                    token: response.data.token,
                    isParameters: 0,
                    isGoal: 0
                }
                addToLocatStorage(obj);
                authentication.dispatch({type:'SIGN_UP', payload:JSON.stringify(obj)});  
        }
        else
            alert(response.data.message);
    })
    .catch((error)=>{
        if(error.response)
            alert(" " + error.response.data.message);
        else
            alert(" "+ error);
    });
}

export default (Account)=>(authentication)=>{
    adding(Account, authentication);
}