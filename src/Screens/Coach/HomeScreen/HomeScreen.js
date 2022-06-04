import React from 'react';
import CoachBottomNavigation from '../../../Navigation/CoachBottomNavigation';

const HomeScreen = props => {
    return(
        <CoachBottomNavigation socket={props.socket} />
    );
};

export default HomeScreen;