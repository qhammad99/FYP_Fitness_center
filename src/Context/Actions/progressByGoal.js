// // this action is called in User / Home / Today

import Urls from '../../config/env';
import axios from 'axios';

const doing = async(Goal, Task, authentication) => {
  Task.setTasks({type: 'LOADING_START'});
  let user = JSON.parse(authentication.state.user);
    let token = user.token;
    let goal_id = Goal.goal.data.id;

    var API_URL= Urls.ProgressByGoal+ goal_id;
    axios.get(API_URL,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          Task.setTasks({type:'ADD_PROGRESS', payload:response.data.progress});
        }else{
            Task.setTasks({type:'ADD_PROGRESS', payload:[{empty:true}]});
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