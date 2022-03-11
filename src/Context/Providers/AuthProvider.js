// main service to make context available for use
// will have context and reducer state and pass the children back in container
import React,{createContext, useReducer, useEffect} from 'react';
import AuthInitialState from '../InitialStates/AuthInitialState';
import AuthReducer from '../Reducers/AuthReducer';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) =>{
    const [state, dispatch] = useReducer( AuthReducer, AuthInitialState );

    useEffect(() => {
        const checkLocalStorage = async()=>{
          let userObj;
          try{
            userObj= await AsyncStorage.getItem('USER');
          }catch(e){
            console.log("error in reading local storage: ", e);
          }
          dispatch({type:'ADD_LOCAL_DATA', payload:userObj});
        }
        checkLocalStorage();
        if(state.isLoading == false){
          SplashScreen.hide();
        }
      }, [state.isLoading]);

    return(
        <AuthContext.Provider value={{state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;