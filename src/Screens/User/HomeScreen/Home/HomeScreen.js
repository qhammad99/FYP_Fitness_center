// This screen is for navigation of home screen
import React from 'react';
import UserHomeNavigation from '../../../../Navigation/UserHomeNavigation';

const HomeScreen = props =>{
    return (
        <UserHomeNavigation navigation={props.navigation} />
    );
};
export default HomeScreen;