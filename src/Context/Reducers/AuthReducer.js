const AuthReducer = (state, action) =>{
    switch(action.type){
        case "ADD_LOCAL_DATA":
            return {
                ...state, 
                user: action.payload,
                isLoading: false,
            };

        case "SIGN_IN":
            return {
                ...state,
                user: action.payload
            };

        case "SIGN_UP":
            return {
                ...state,
                user: action.payload
            };

        case "SIGN_OUT":
            return {
                ...state,
                user: null,
                goal_id: null
            };
        
        case "GOAL_ADD":
            return {
                ...state,
                goal_id: action.payload
            }
    }
}

export default AuthReducer;