import React, {useState} from 'react';

import ParameterRoutes from '../../../../Navigation/ParameterRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserParameter = props => {
  //we will get parameters and land it to user home after bmi
  return(
    <ParameterRoutes />
  );
};

export default UserParameter;
