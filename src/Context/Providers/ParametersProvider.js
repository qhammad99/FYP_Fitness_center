import React, {createContext, useReducer} from 'react';

import ParametersInitialState from '../InitialStates/ParametersInitialState';
import ParametersReducer from '../Reducers/ParametersReducer';

export const ParametersContext = createContext(null);

const ParametersProvider =({children}) =>{
    const [parameters, setParameters] = useReducer(ParametersReducer, ParametersInitialState);

    return(
        <ParametersContext.Provider value={{parameters, setParameters}}>
            {children}
        </ParametersContext.Provider>
    )
}

export default ParametersProvider;