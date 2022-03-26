// this action is called in bmi parameters

import Urls from '../../config/env';
import {ToastAndroid, AlertIOS} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const updateParameters = async(Parameters, authentication)=>{
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
    Parameters.setParameters({type: 'CLEAR_CONTEXT'});
  }

export default (Parameters)=>(authentication)=>{
    let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.ParametersAdd;
    axios.post(API_URL, {
            height : Parameters.parameters.height,
            weight : Parameters.parameters.weight,
            dob: Parameters.parameters.dob,
            gender: Parameters.parameters.gender
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
                updateParameters(Parameters, authentication);
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