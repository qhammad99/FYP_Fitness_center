// Landing screen of User
import React, {useEffect, useContext} from 'react';
import DrawerNavigation from '../../../Navigation/DrawerNavigation';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import completedGoals from '../../../Context/Actions/completedGoals';

const Home = () => {
    const authentication = useContext(AuthContext);
    
    useEffect(()=>{
        completedGoals(authentication);
    },[]);
    return (
        <DrawerNavigation />
    );
};

export default Home;