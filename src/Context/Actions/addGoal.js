// this action is called in User Goal

import Urls from '../../config/env';
import {ToastAndroid, AlertIOS} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const updateGoal = async(Parameters, authentication)=>{
    let userObj;
        try{
          userObj= await AsyncStorage.getItem('USER');
        }catch(e){
          console.log("error in reading local storage: ", e);
        }
        userObj = JSON.parse(userObj)
        userObj = {...userObj, isGoal: 1}
        userObj = JSON.stringify(userObj);
        try{
            await AsyncStorage.setItem('USER', userObj);
          }catch(e){
            console.log("error in writing local storage: ", e);
          }
        authentication.dispatch({type:'ADD_LOCAL_DATA', payload:userObj});
        Parameters.setParameters({type: 'CLEAR_CONTEXT'}); //clear the height weight parameters which we used for BMI
  }

export default (startDate, numberOfDays, targetType, targetValue, difficulty) => (Parameters) => (authentication)=>{
    let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.GoalAdd;
    axios.post(API_URL, {
            start_date : startDate,
            number_of_days : numberOfDays,
            target_type: targetType,
            target_value: targetValue,
            difficulty: difficulty
    },{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
            if (Platform.OS === 'android') {
                ToastAndroid.show("Goal Added", ToastAndroid.SHORT)
                } else {
                AlertIOS.alert("Goal Added");
                }
                updateGoal(Parameters, authentication);
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