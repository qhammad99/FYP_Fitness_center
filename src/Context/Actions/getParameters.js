// this action is called in goal screen
// also called in profile screen

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
            parameters={
                height: parameters.height,
                weight: parameters.weight,
                dob: parameters.dob,
                gender: parameters.gender
            }
            Parameters.setParameters({type: 'PARAMETERS_ADD', payload: parameters});
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