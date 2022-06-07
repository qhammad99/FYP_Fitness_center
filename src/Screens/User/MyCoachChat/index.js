import React, {useContext, useState, useEffect} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import Message from '../../../components/Message';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {CoachContext} from '../../../Context/Providers/CoachProvider';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../colors/Colors';
import moment from 'moment';
import {URL} from '@env';
import Urls from '../../../config/env';
import axios from 'axios';

const MyCoachChat = props =>{
    const authentication = useContext(AuthContext);
    const Coach = useContext(CoachContext);
    const user = JSON.parse(authentication.state.user);
    const focused = useIsFocused();
    const navigation= useNavigation();

    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState(null);
    const [arrivalMsg, setArrivalMsg] = useState(null);
    const [sendedMsg, setSendedMsg] = useState(null);

    //to hide bottom ta bar
    useEffect(() => {
        focused &&
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      }, [focused]);

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
        if(Coach.state.socket != null){
            Coach.state.socket.on("get_message",data=>setArrivalMsg(data));
            Coach.state.socket.on("message_sended", data=>setSendedMsg(data))
        }
    },[Coach.state.socket])

    useEffect(()=>{
        arrivalMsg &&
        setMessages(prev=>[arrivalMsg, ...prev]);
    },[arrivalMsg])

    useEffect(()=>{
        sendedMsg &&
            setMessages(prev=>[sendedMsg, ...prev]);
    },[sendedMsg])

    const sendMessage = ()=>{
        if(newMessage!=null){
            let messageObj = {
                sender_id: user.user_id,
                reciever_id: Coach.state.coach.coach_id,
                message: newMessage,
                msg_time: moment().local().format("YYYY-MM-DD HH:mm:ss")
            };
            Coach.state.socket.emit("send_message", messageObj)
            setNewMessage(null);
        }
    }
    return (
        <>
        <View style={styles.header}>
        {
            Coach.state.coahOnline ?
            <View style={styles.statusContainer}>
                <View style={styles.onlineStatus}/>
                <Text style={styles.statusText}>Online</Text>
            </View>:
            <View style={styles.statusContainer}>
                <View style={styles.offlineStatus}/>
                <Text style={styles.statusText}>Offline</Text>
            </View>
        }
            <TouchableOpacity onPress={()=>navigation.navigate("MyCoachInfo")}>
                <Text style={styles.coachName} numberOfLines={1}>
                    {Coach.state.coach.name}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("MyCoachInfo")}>
                <Image source={{ uri: URL + '/public/userImages/' + Coach.state.coach.img_file }} style={styles.profileImage} />
            </TouchableOpacity>
        </View>


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
                    defaultValue={newMessage}
                    placeholderTextColor={Colors.lightDark}/>
                <TouchableOpacity onPress={sendMessage}>
                    <Icon name="send-circle" size = {45} color={Colors.selectedColor}/>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

export default MyCoachChat;