// reducer is a function connected with dispatch(setAccount) and get state and action in parameter
import SignupInitialState from '../InitialStates/SignupInitialState';

const accountReducer = (state, action)=>{
    switch(action.type){
        case "USER_TYPE":
            return {...state, userType: action.payload};

        case "FIRST_NAME":
            return {...state, firstName: action.payload};

        case "SECOND_NAME":
            return {...state, secondName: action.payload};

        case "EMAIL":
            return {...state, email: action.payload};

        case "PASSWORD":
            return {...state, password: action.payload};
        
        case "CLEAR_CONTEXT":
            return SignupInitialState;

    }
}

export default accountReducer;