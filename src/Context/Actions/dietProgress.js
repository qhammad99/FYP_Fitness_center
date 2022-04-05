// this action is called in Component / Task Container

import Urls from '../../config/env';
import axios from 'axios';

const doing = async(Item, dayNumber, Goal, authentication) => {
  let user = JSON.parse(authentication.state.user);
    let token = user.token;

    let goal_id = Goal.goal.data.id;

    var API_URL= Urls.DietProgress;
    axios.post(API_URL,{
      diet_id: Item.dietID,
      calories: Item.calories,
      start_time: Item.start_time,
      finish_time: Item.finish_time,
      goal_id: goal_id,
      day_no: dayNumber
    },{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
            Goal.setGoal({type:'COMPLETED_GOAL', payload:Goal.goal.completedGoals});
            // just to re render the to do component
        }
    })
    .catch((error)=>{
      if(error.response)
        alert(" " + error.response.data.message);
      else
        alert(" "+ error);
    });
}

export default (Item)=>(dayNumber)=>(Goal)=>(authentication)=>{
    doing(Item, dayNumber, Goal, authentication);
}