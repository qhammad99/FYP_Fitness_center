import React, {useEffect, useRef, useContext} from 'react';
import CoachDrawer from '../../../Navigation/CoachDrawer';
import { SIMPLE_URL} from '@env';
import {io} from 'socket.io-client';
import { AuthContext } from '../../../Context/Providers/AuthProvider';

const Home = () => {
    const authentication = useContext(AuthContext);
    const socket = useRef(null);

    let user = JSON.parse(authentication.state.user);
    useEffect(()=>{
        socket.current = io(SIMPLE_URL);
        socket.current.emit('addUser', user.user_id);
    },[])

    return(
        <CoachDrawer socket={socket}/>
    );
};

export default Home;