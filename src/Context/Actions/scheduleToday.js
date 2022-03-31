// this action is called in User / Home / todo

import Urls from '../../config/env';
import axios from 'axios';

const doing = async(Goal, Task, authentication) => {
  let user = JSON.parse(authentication.state.user);
    let token = user.token;

    let goal_id = Goal.goal.data.id;

    var API_URL= Urls.ScheduleToday;
    axios.post(API_URL,{
      goal_id: goal_id
    },{
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

export default (Goal)=>(Task)=>(authentication)=>{
    doing(Goal, Task, authentication);
}