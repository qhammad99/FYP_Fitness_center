import React, {createContext, useReducer} from 'react';

import GoalInitialState from '../InitialStates/GoalInitialState';
import GoalReducer from '../Reducers/GoalReducer';

export const GoalContext = createContext(null);

const GoalProvider =({children}) =>{
    const [goal, setGoal] = useReducer(GoalReducer, GoalInitialState);

    return(
        <GoalContext.Provider value={{goal, setGoal}}>
            {children}
        </GoalContext.Provider>
    )
}

export default GoalProvider;