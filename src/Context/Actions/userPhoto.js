// this action is called in profile

import Urls from '../../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const FormData = global.FormData;

const updateState = async(uri, authentication)=>{
    let userObj;
    try{
      userObj= await AsyncStorage.getItem('USER');
    }catch(e){
      console.log("error in reading local storage: ", e);
    }
    userObj = JSON.parse(userObj);
    userObj = {...userObj, img_file: uri};
    userObj = JSON.stringify(userObj);

    try{
      await AsyncStorage.setItem('USER', userObj);
    }catch(e){
      console.log("error in writing local storage: ", e);
    }
    authentication.dispatch({type:'ADD_LOCAL_DATA', payload:userObj});
  }

export default (Image)=>(authentication)=>{
    let user = JSON.parse(authentication.state.user);
    let token = user.token;

    const formData = new FormData();
    formData.append('photo',{
      uri: Image.uri,
      type: Image.type,
      name: Image.fileName
    })

    var API_URL= Urls.UserPhoto;
    axios({
      url: API_URL,
      method: 'PATCH',
      data: formData,
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type': `multipart/form-data`,
      },
      transformRequest: (data, error) => {
        return formData;
      }
    })
    .then((response)=>{
        if(response.data.success){
          updateState(response.data.url, authentication);
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