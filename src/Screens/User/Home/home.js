// Landing screen of User
import React, {useEffect, useContext} from 'react';
import DrawerNavigation from '../../../Navigation/DrawerNavigation';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import { GoalContext } from '../../../Context/Providers/GoalProvider';
import completedGoals from '../../../Context/Actions/completedGoals';
import TaskProvider from '../../../Context/Providers/TaskProvider';

const Home = () => {
    const authentication = useContext(AuthContext);
    const Goal = useContext(GoalContext);

    useEffect(()=>{
        completedGoals(Goal)(authentication);
    },[]);
    return (
        <TaskProvider>
            <DrawerNavigation />
        </TaskProvider>
    );
};

export default Home;