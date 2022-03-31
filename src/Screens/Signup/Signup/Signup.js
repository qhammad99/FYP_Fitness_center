import React from 'react';
import SignupRoutes from '../../../Navigation/SignupRoutes';
import SignupProvider from '../../../Context/Providers/SignupProvider';

const Signup = props => {
  
  return (
    <SignupProvider navigation={props.navigation}>
      <SignupRoutes />
    </SignupProvider>
  );
};

export default Signup;
