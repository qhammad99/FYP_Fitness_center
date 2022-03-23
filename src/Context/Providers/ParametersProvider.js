import React, {createContext, useReducer} from 'react';
import { useContext } from 'react/cjs/react.production.min';
import ParametersInitialState from '../InitialStates/ParametersInitialState';

export const ParametersContext = useContext(null);

const ParametersProvider =({children}) =>{
    const [parameters, setParameters] = useReducer(()=>{}, ParametersInitialState);

    return(
        <ParametersContext.Provider value={{parameters, setParameters}}>
            {children}
        </ParametersContext.Provider>
    )
}

export default ParametersProvider;