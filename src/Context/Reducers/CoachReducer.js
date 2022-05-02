import CoachInitialState from "../InitialStates/CoachInitialState";
const CoachReducer = (state, action) =>{
    switch(action.type){
        case "LOADING_START":
            return{
                ...state,
                isLoading: true
            };

        case "AVAILABLE_LOADING":
            return{
                ...state,
                availableCoachsLoading: true
            }
        
        case "ADD_AVAILABLE":
            return{
                ...state,
                availableCoachs: action.payload,
                availableCoachsLoading: false
            }

        case "COACH_ONLINE":
            return {
                ...state, 
                coahOnline: true
            };
            
        case "COACH_OFFLINE":
            return {
                ...state, 
                coahOnline: false
            };

        case "ADD_COACH":
            return {
                ...state, 
                coach: action.payload,
                isLoading: false
            };

        case "ADD_SOCKET":
            return{
                ...state,
                socket: action.payload
            };
        
        case "COACH_RESET":
            return CoachInitialState;
    }
}

export default CoachReducer;