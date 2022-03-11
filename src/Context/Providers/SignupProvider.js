// main service to make context available for use
// will have context and reducer state and pass the children back in container

import React,{createContext, useReducer} from 'react';
import SignupInitialState from '../InitialStates/SignupInitialState';
import SignupReducer from '../Reducers/SignupReducer';

export const SignupContext = createContext(null);

const SignupProvider = ({children}) =>{
    const [account, setAccount]=useReducer(SignupReducer, SignupInitialState);

    return(
        <SignupContext.Provider value={{account, setAccount }}>
            {children}
        </SignupContext.Provider>
    );
};

export default SignupProvider;