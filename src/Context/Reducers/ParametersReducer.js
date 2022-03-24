import ParametersInitialState from '../InitialStates/ParametersInitialState';

const parameterReducer = (state, action) => {
    switch(action.type){
        case "HEIGHT":
            return {...state, height: action.payload};

        case "WEIGHT":
            return {...state, weight: action.payload};

        case "DOB":
            return {...state, dob: action.payload};

        case "GENDER":
            return {...state, gender: action.payload};
            
        case "CLEAR_CONTEXT":
            return ParametersInitialState;
    }
}

export default parameterReducer;