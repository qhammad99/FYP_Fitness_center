// This screen is for navigation of home screen
import React from 'react';
import UserHomeNavigation from '../../../../Navigation/UserHomeNavigation';
import TaskProvider from '../../../../Context/Providers/TaskProvider'

const HomeScreen = props =>{
    return (
        <TaskProvider>
            <UserHomeNavigation navigation={props.navigation} />
        </TaskProvider>
    );
};
export default HomeScreen;