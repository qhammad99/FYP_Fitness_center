import React from 'react';
import {Text, View, TextInput} from 'react-native';
import Colors from '../../../colors/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MyCoachChat = () =>{
    return (
        <>
        {/* search bar */}
        <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
                <Icon 
                    name={"account-search"} 
                    size={25} 
                    color={Colors.lightDark} 
                    style={{marginHorizontal:5}}
                    />

                <TextInput 
                    placeholder='Search'
                    style={styles.searchBarInput}
                    />
            </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.darkColor }}>Chat</Text>
        </View>
        </>
    );
}

export default MyCoachChat;