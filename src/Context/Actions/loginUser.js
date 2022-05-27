// this action is called in login

import Urls from '../../config/env';
import { ToastAndroid, AlertIOS } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const addToLocatStorage = async (userObj) => {
    try {
        await AsyncStorage.setItem('USER', JSON.stringify(userObj));
    } catch (e) {
        console.log("error while storing in local storage, ", e);
    }
}

export default (emailText, passText) => (authentication) => {
    var API_URL = Urls.LoginURL;
    axios.post(API_URL, {
        email: emailText,
        password: passText
    })
        .then((response) => {
            if (response.data.success) {
                if (Platform.OS === 'android') {
                    ToastAndroid.show("User Authenticated", ToastAndroid.SHORT)
                } else {
                    AlertIOS.alert("User Authenticated");
                }
                let userObj = response.data.user;
                userObj = { ...userObj, token: response.data.token };
                addToLocatStorage(userObj);

                if (userObj.u_type === 2) {
                    var API_URL1 = Urls.coach_info_id + userObj.user_id;
                    // alert("LOGIN DETAILS", API_URL1)
                    axios.get(API_URL1, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${response.data.token}`
                        }
                    })
                        .then((res) => {
                            if (res.data.success) {
                                userObj = { ...userObj, ...res.data.coach }
                            }
                            console.log("LOGIN DETAILS",userObj)
                            authentication.dispatch({ type: 'SIGN_IN', payload: JSON.stringify(userObj) });
                        })

                } else {
                    authentication.dispatch({ type: 'SIGN_IN', payload: JSON.stringify(userObj) });
                }
                // authentication.dispatch({type:'SIGN_IN', payload:JSON.stringify(userObj)});
            }
            else
                alert(response.data.message);
        })
        .catch((error) => {
            if (error.response)
                alert(" " + error.response.data.message);
            else
                alert(" " + error);
        });
}