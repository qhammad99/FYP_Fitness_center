// this action is called in signup password

import Urls from '../../config/env';
import {ToastAndroid, AlertIOS} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const updateParameters = async(authentication)=>{
    let userObj;
    try{
      userObj= await AsyncStorage.getItem('USER');
    }catch(e){
      console.log("error in reading local storage: ", e);
    }
    userObj = JSON.parse(userObj)
    userObj = {...userObj, isParameters: 1}
    userObj = JSON.stringify(userObj);

    try{
      await AsyncStorage.setItem('USER', userObj);
    }catch(e){
      console.log("error in writing local storage: ", e);
    }
    authentication.dispatch({type:'ADD_LOCAL_DATA', payload:userObj});
  }

export default (parameters)=>(authentication)=>{
    let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.ParametersAdd;
    console.log('fetching started');
    axios.post(API_URL, {
            height : parameters.height,
            weight : parameters.weight,
            dob: parameters.dob,
            gender: parameters.gender
    },{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
            if (Platform.OS === 'android') {
                ToastAndroid.show("Parameters Added", ToastAndroid.SHORT)
                } else {
                AlertIOS.alert("Parameters Added");
                }
                updateParameters(authentication);
        }
        else
            alert(response.data.message);
    })
    .catch((error)=>{
        alert(" " + error.response.data.message);
    });
}