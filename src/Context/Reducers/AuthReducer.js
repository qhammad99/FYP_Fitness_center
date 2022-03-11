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
                user: action.payload,
                isSignout:false
            };

        case "SIGN_UP":
            return {
                ...state,
                user: action.payload,
                isSignout:false,
                isParameters:false
            };

        case "SIGN_OUT":
            return {
                ...state,
                user: null,
                isSignout:true,
                isParameters:false,
                isGoal:false
            };

        case "PARAMETERS":
            return {
                ...state, 
                isParameters:true
            };

        case "GOAL":
            return {
                ...state, 
                isGoal:true
            };
    }
}

export default AuthReducer;