// this action is called in User / Home

import Urls from '../../config/env';
import axios from 'axios';

export default (Goal)=>(authentication)=>{
    let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.GoalCurrent;
    axios.get(API_URL,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          Goal.setGoal({type:'ADD_GOAL', payload: response.data.goal});
        }
        else
          Goal.setGoal({type:'UPDATE_COMPLETED'});
    })
    .catch((error)=>{
      if(error.response)
        alert(" " + error.response.data.message);
      else
        alert(" "+ error);
    });
}