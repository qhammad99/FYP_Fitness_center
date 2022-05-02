// this action is called in navigation / routes

import Urls from '../../config/env';
import axios from 'axios';

const doing = (Coach, authentication) =>{
  let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.ClientsCoach;
    axios.get(API_URL,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          Coach.dispatch({type:'ADD_COACH', payload: response.data.coach});
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

export default (Coach)=>(authentication)=>{
    doing(Coach, authentication);
}