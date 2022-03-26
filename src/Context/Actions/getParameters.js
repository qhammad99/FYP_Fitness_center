// this action is called in goal screen

import Urls from '../../config/env';
import axios from 'axios';


export default (Parameters) => (authentication)=>{
    let user = JSON.parse(authentication.state.user);
    let token = user.token;

    var API_URL= Urls.ParametersGet;
    axios.get(API_URL, {
        headers:{
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
            let parameters = response.data.parameters;
            Parameters.setParameters({type: 'HEIGHT', payload: parameters.height});
            Parameters.setParameters({type: 'WEIGHT', payload: parameters.weight});
        }
        else
            alert(response.data.message);
    })
    .catch((error)=>{
        if(error.response)
            alert(" " + error.response.data.message);
        else
            alert(" "+ error);
    });
}