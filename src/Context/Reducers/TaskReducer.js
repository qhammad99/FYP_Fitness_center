import TasksInitialState from "../InitialStates/TasksInitialState";
const TaskReducer = (state, action) =>{
    switch(action.type){
        case "ADD_TASKS":
            return {
                ...state, 
                tasks: action.payload,
            };
    }
}

export default TaskReducer;