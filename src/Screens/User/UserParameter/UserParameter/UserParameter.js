import React from 'react';

import ParameterRoutes from '../../../../Navigation/ParameterRoutes';
import ParametersProvider from '../../../../Context/Providers/ParametersProvider';

const UserParameter = props => {
  //we will get parameters and land it to user home after bmi
  return(
    <ParametersProvider navigation={props.navigation}>
      <ParameterRoutes />
    </ParametersProvider>
  );
};

export default UserParameter;
