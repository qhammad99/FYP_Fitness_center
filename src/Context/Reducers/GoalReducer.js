import GoalInitialState from "../InitialStates/GoalInitialState";
const AuthReducer = (state, action) =>{
    switch(action.type){
        case "ADD_GOAL":
            return {
                ...state, 
                data: action.payload,
            };

        case "COMPLETED_GOAL":
            return {
                ...state,
                completedGoals: action.payload
            }

        case "UPDATE_COMPLETED":
            return {
                ...state,
                goalCompleted: true
            };
        
        case "RESET_COMPLETED":
            return {
                ...state,
                goalCompleted: false
            };

        case "SIGN_OUT":
            return GoalInitialState;
    }
}

export default AuthReducer;