import React, {createContext, useReducer} from 'react';

import TasksInitialState from '../InitialStates/TasksInitialState';
import TaskReducer from '../Reducers/TaskReducer';

export const TaskContext = createContext(null);

const TaskProvider =({children}) =>{
    const [tasks, setTasks] = useReducer(TaskReducer, TasksInitialState);

    return(
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;