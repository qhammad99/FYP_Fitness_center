// // this action is called in User / Home / Today

import Urls from '../../config/env';
import axios from 'axios';

const doing = async(day, Task, authentication) => {
  let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.ScheduleByDay+day;
    axios.get(API_URL,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          Task.setTasks({type:'ADD_TASKS', payload:response.data.tasks});
        }else{
            Task.setTasks({type:'ADD_TASKS', payload:[{empty:true}]});
        }
    })
    .catch((error)=>{
      if(error.response)
        alert(" " + error.response.data.message);
      else
        alert(" "+ error);
    });
}

export default (day)=>(Task)=>(authentication)=>{
    doing(day, Task, authentication);
}