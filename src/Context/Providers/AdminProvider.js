import React,{createContext, useReducer} from 'react';
import AdminInitialState from '../InitialStates/AdminInitialState';
import AdminReducer from '../Reducers/AdminReducer';

export const AdminContext = createContext(null);

const AuthProvider = ({children}) =>{
    const [state, dispatch] = useReducer( AdminReducer, AdminInitialState );
    return(
        <AdminContext.Provider value={{state, dispatch }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AuthProvider;