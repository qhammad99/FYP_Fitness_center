// this action is called in User / Home

import Urls from '../../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const updateGoal = async(completedGoals)=>{
    let goalObj;
    try{
        goalObj= await AsyncStorage.getItem('GOAL');
    }catch(e){
      console.log("error in reading local storage: ", e);
    }
    goalObj = JSON.parse(goalObj)
    goalObj = {...goalObj, completedGoals: completedGoals}
    goalObj = JSON.stringify(goalObj);

    try{
      await AsyncStorage.setItem('GOAL', goalObj);
    }catch(e){
      console.log("error in writing local storage: ", e);
    }
  }

export default (authentication)=>{
    let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.GoalCompleted;
    axios.get(API_URL,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
            updateGoal(response.data.completedGoals);
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