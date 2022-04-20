// // this action is called in User / Home / Today

import Urls from '../../config/env';
import axios from 'axios';

const doing = async(Goal, day, Task, authentication) => {
  Task.setTasks({type:'LOADING_START'});
  
  let user = JSON.parse(authentication.state.user);
    let token = user.token;
    let goal_id = Goal.goal.data.id;

    var API_URL= Urls.ProgressTasks+ goal_id +'/'+day;
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

export default (Goal)=>(day)=>(Task)=>(authentication)=>{
    doing(Goal, day, Task, authentication);
}