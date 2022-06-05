import React, {useEffect, useContext, useState} from 'react';
import CoachDrawer from '../../../Navigation/CoachDrawer';
import { SIMPLE_URL} from '@env';
import {io} from 'socket.io-client';
import { AuthContext } from '../../../Context/Providers/AuthProvider';

const Home = () => {
    const authentication = useContext(AuthContext);
    const [socket, setSocket] = useState(io(SIMPLE_URL));

    let user = JSON.parse(authentication.state.user);
    useEffect(()=>{
        socket.emit('addUser', user.user_id);
    },[])

    return(
        <CoachDrawer socket={socket}/>
    );
};

export default Home;