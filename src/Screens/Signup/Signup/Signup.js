import React,{useState, createContext} from 'react';
import SignupRoutes from '../../../Navigation/SignupRoutes';
import SignupProvider from '../../../Context/Providers/SignupProvider';

const Signup = props => {
  
  return (
    // currently not studied context
    // so shifting all data to password screen
    // and connecting to database there
    <SignupProvider navigation={props.navigation}>
      <SignupRoutes />
    </SignupProvider>
  );
};

export default Signup;
