// this action is called in User / Home Screen / Extra Item

import Urls from '../../config/env';
import axios from 'axios';

const doint = async(Item, authentication) =>{
  let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.ExtraProgress;

    try{
      return await axios.post(API_URL,{
        name: Item.name,
        calories: Item.calories,
        category: Item.category,
        goal_id: Item.goal_id,
        day_no: Item.dayNumber,
        start_time: Item.start_time
      },{
          headers:{
              'Content-Type' : 'application/json',
              'Authorization' : `Bearer ${token}`
          }
      }).then((response)=>{
            if(response.data.success){
                return true;
            }else
              return false;
        })
    }catch(error){
      if(error.response)
        alert(" " + error.response.data.message);
      else
        alert(" "+ error);
    }
}

export default (Item)=>(authentication)=>{
  return doint(Item, authentication);
}