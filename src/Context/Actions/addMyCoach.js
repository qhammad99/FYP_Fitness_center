// this action is called in Available Coach / index on modal click

import Urls from '../../config/env';
import axios from 'axios';

const doing = (Obj, Coach, authentication) =>{
  let user = JSON.parse(authentication.state.user);
    let token = user.token;
    Coach.dispatch({type:'LOADING_START'});

    var API_URL= Urls.AddMyCoach;
    axios.post(API_URL,{
      coach_id: Obj.coach_id,
      payment_date: Obj.payment_date,
      payment_expiry: Obj.payment_expiry
    },{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          Coach.dispatch({type:'ADD_COACH', payload: response.data.coach.coach_id});
        }
        else
          Coach.dispatch({type:'ADD_COACH', payload: {empty: true}});
    })
    .catch((error)=>{
      if(error.response)
        alert(" " + error.response.data.message);
      else
        alert(" "+ error);
    });
}

export default (Obj)=>(Coach)=>(authentication)=>{
    doing(Obj, Coach, authentication);
}