import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  FlatList
} from 'react-native';
import {AuthContext} from '../../Context/Providers/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from '../../components/Message';
import Colors from '../../colors/Colors';
import Urls from '../../config/env';
import moment from 'moment';
import axios from 'axios';

export default function Chat({socket, userInfo}) {
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [arrivalMsg, setArrivalMsg] = useState(null);
  const [sendedMsg, setSendedMsg] = useState(null);

  useEffect(()=>{
    let token = user.token;
    var API_URL= Urls.GetMessages+user.user_id+`/${userInfo.user_id}`;

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
  socket.on("get_message", data=>setArrivalMsg(data));
  socket.on("message_sended", data=>setSendedMsg(data))
},[socket]);

useEffect(()=>{
  arrivalMsg && arrivalMsg.reciever_id == user.user_id &&
    setMessages(prev=>[arrivalMsg, ...prev]);
},[arrivalMsg]);

useEffect(()=>{
  sendedMsg && 
      setMessages(prev=>[sendedMsg, ...prev]);
},[sendedMsg]);

const sendMessage = ()=>{
  console.log('called');
  console.log(newMessage);
  if(newMessage!=null){
      let messageObj = {
        sender_id: user.user_id,
        reciever_id: userInfo.user_id,
        message: newMessage,
        msg_time: moment().local().format("YYYY-MM-DD HH:mm:ss")
      };
      socket.emit("send_message", messageObj)
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
              defaultValue={newMessage}
              placeholderTextColor={Colors.lightDark}/>
          <TouchableOpacity onPress={sendMessage}>
            <Icon name="send-circle" size = {45} color={Colors.selectedColor}/>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    margin:10,
    marginTop:-5
  },
  messageInput:{
      flex:1,
      marginRight:8,
      backgroundColor:'#f2f2f2',
      borderWidth:0.5,
      borderColor:'#dedede',
      borderRadius:20,
      paddingHorizontal:10,
      color:Colors.darkColor
  }
});
