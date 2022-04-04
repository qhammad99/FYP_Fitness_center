import TasksInitialState from "../InitialStates/TasksInitialState";
const TaskReducer = (state, action) =>{
    switch(action.type){
        case "ADD_TASKS":
            return {
                ...state, 
                tasks: action.payload,
            };
            
        case "ADD_PROGRESS":
            return{
                ...state,
                progress: action.payload
            }

        case "RESET_PROGRESS":
            return{
                ...state,
                progress: null
            }
    }
}

export default TaskReducer;