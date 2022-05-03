import React, {useContext, useState, useEffect} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Message from '../../../components/Message';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {CoachContext} from '../../../Context/Providers/CoachProvider';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../colors/Colors';
import moment from 'moment';
import Urls from '../../../config/env';
import axios from 'axios';

const MyCoachChat = () =>{
    const authentication = useContext(AuthContext);
    const Coach = useContext(CoachContext);
    const user = JSON.parse(authentication.state.user);
    const focused = useIsFocused();

    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState(null);
    const [arrivalMsg, setArrivalMsg] = useState(null);

    useEffect(()=>{
        let token = user.token;
        var API_URL= Urls.GetMessages+user.user_id+`/${Coach.state.coach.coach_id}`;

        axios.get(API_URL, {
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((response)=>{
            if(response.data.success){
                setMessages(response.data.chat);
            }
        })
        .catch((error)=>{
            if(error.response)
                alert(" " + error.response.data.message);
            else
                alert(" "+ error);
        });
    },[]);

    useEffect(()=>{
        if(Coach.state.socket != null)
            Coach.state.socket.on("get_message",data=>setArrivalMsg(data));
    },[Coach.state.socket])

    useEffect(()=>{
        arrivalMsg && focused &&
        setMessages(prev=>[arrivalMsg, ...prev]);
    },[arrivalMsg, focused])

    const sendMessage = ()=>{
        if(newMessage!=null){
            let reciever_id;
            if(!Coach.state.coach.coach_id)
                reciever_id=Coach.state.coach
            else
                reciever_id= Coach.state.coach.coach_id

            let messageObj = {
                sender_id: user.user_id,
                reciever_id: reciever_id,
                message: newMessage,
                msg_time: moment().local().format("YYYY-MM-DD HH:mm:ss")
            };
            Coach.state.socket.emit("send_message", messageObj)
            if(messages == null)
                setMessages([messageObj]);
            else
                setMessages([messageObj, ...messages]);
            setNewMessage(null);
        }
    }
    return (
        <View style={styles.container}>
            {
                !messages &&
                <Text style={{color: Colors.lightDark}}>Start conservation</Text>
            }
            <FlatList 
                data={messages}
                renderItem={({item})=>
                <Message message={item} userID={user.user_id}/>}
                inverted
                keyExtractor={(item, index)=>`msg-${index}`}
                />

            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Type message...' 
                    style={styles.messageInput}
                    onChangeText={(text)=>setNewMessage(text)}
                    defaultValue={newMessage}/>
                <TouchableOpacity onPress={sendMessage}>
                    <Icon name="send-circle" size = {40} color={Colors.selectedColor}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MyCoachChat;