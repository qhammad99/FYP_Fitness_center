import AdminInitialState from "../InitialStates/AdminInitialState";

const AdminReducer = (state, action) =>{
    switch(action.type){
        case "LOADING_START":
            return {
                ...state, 
                isLoading: true,
            };

        case "LOADING_STOP":
            return {
                ...state, 
                isLoading: false,
            };
    }
}

export default AdminReducer;