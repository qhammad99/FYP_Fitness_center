// this action is called in Component / Task Container

import Urls from '../../config/env';

import axios from 'axios';

const doing = async(Coach,authentication) => {
  let user = JSON.parse(authentication.state.user);
    let token = user.token;

    let coachId = user.user_id;

    var API_URL=Urls.coach_all_users;
    axios.post(API_URL,{
      coachId
    },{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
      console.log("response=====>",response.data)
      Coach.dispatch({type:'SUBSCRIBED_USERS', payload: response.data.coachs})
            // just to re render the to do component
        }
    })
    .catch((error)=>{
      console.log("response Error=====>",error)
      if(error.response)
        alert(" " + error.response.data.message);
      else
        alert(" "+ error);
    });
}

export default (Coach)=>(authentication)=>{
    doing(Coach,authentication);
}