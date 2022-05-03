import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Message = ({message, userID}) =>{
    const isMe = message.sender_id === userID;

    return (
        <View style={isMe? styles.myTextContainer: styles.reciverTextContainer}>
            <Text style={isMe? styles.myText: styles.reciverText}>
                {message.message}
            </Text>
            <Text style={isMe? styles.myMessageTime: styles.messageTime}>
                {moment(message.msg_time, "YYYY-MM-DD HH:mm:ss").local().format('HH:mm')}
            </Text>
        </View>
    );
}

export default Message;