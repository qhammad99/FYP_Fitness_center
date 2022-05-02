// coach provider is for to coah at client side
import React,{createContext, useReducer} from 'react';
import CoachInitialState from '../InitialStates/CoachInitialState';
import CoachReducer from '../Reducers/CoachReducer'

export const CoachContext = createContext(null);
const CoachProvider = ({children}) =>{
    const [state, dispatch] = useReducer( CoachReducer, CoachInitialState );
    
    return(
        <CoachContext.Provider value={{state, dispatch }}>
            {children}
        </CoachContext.Provider>
    );
};

export default CoachProvider;