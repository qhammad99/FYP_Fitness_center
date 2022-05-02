import React, {useContext, useState, useEffect} from 'react';
import {View, TextInput, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Message from '../../../components/Message';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {CoachContext} from '../../../Context/Providers/CoachProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../colors/Colors';
import moment from 'moment';

const MyCoachChat = () =>{
    const authentication = useContext(AuthContext);
    const Coach = useContext(CoachContext);
    const user = JSON.parse(authentication.state.user);
    const [messages, setMessages] = useState([{
        message:`Just got home after a day of implementing a Strapi backend with an API for a web order system with an CMS, time to see someone else cod`,
        sender_id: 2,
        msg_time: '10:00'
    },{
        message:`hi would you like work in a nice proyect for latam, we are talking about alot money, we have the api and DB. we are working in frontend. how we can talk with you. for frontend we use ReactNative.`,
        sender_id: 3,
        msg_time: '10:01'
    }
]);
    const [newMessage, setNewMessage] = useState(null);

    const sendMessage = ()=>{
        if(newMessage!=null){
            let messageObj = {
                sender_id: user.user_id,
                reciever_id: Coach.state.coach.coach_id,
                message: newMessage,
                msg_time: moment().local().format('HH:mm:ss')
            };
            Coach.state.socket.emit("send_message", messageObj)
            setMessages([messageObj, ...messages]);
            setNewMessage(null);
        }
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={messages}
                renderItem={({item})=>
                <Message message={item} userID={user.user_id}/>}
                inverted
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