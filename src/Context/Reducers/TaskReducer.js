import TasksInitialState from "../InitialStates/TasksInitialState";
const TaskReducer = (state, action) =>{
    switch(action.type){
        case "LOADING_START":
            return{
                ...state,
                isLoading: true
            }
            
        case "ADD_TASKS":
            return {
                ...state, 
                tasks: action.payload,
                isLoading: false
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