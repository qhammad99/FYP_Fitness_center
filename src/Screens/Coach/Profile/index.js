import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState, useContext } from 'react';
import {
    View, Text,
    TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, TextInput, Modal, Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import { CoachContext } from '../../../Context/Providers/CoachProvider';
import moment from 'moment';
import { URL } from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Urls from '../../../config/env';
import axios from 'axios';
export default Home = (props) => {
    const authentication = useContext(AuthContext);
    const Coach = useContext(CoachContext);
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([])
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")




   
    return (

        <View style={{flex:1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E26F1E',paddingHorizontal:20,
        paddingVertical:10 }}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.openDrawer()
                    }}
                >
                    <Image
                        source={require('./../../../Assets/menu.png')}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: 'white'
                        }}
                    />
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Profile</Text>
                <View />
            </View>
            <ScrollView
            style={{
                flex:1
            }}
            >
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, flexDirection: 'row' }}>
                <Image
                    source={require('../../../Assets/userAvatar.png')}
                    style={{
                        height: 100, width: 100,
                        opacity: 100,
                        borderRadius: 40, marginBottom: 10,
                    }}
                />
                <Ionicons name="camera-outline" size={20} style={{ paddingTop: 85 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 30 }}>
                <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E' }}>Name</Text>
                <TextInput
                    style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                    width={200}
                    height={40}
                    placeholder='Enter Your Name'
                    color="#E26F1E"
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 20 }}>
                <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E' }}>Email:</Text>
                <TextInput
                    style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                    width={200}
                    height={40}
                    placeholder='Enter Your Email'
                    color="#E26F1E"
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 20 }}>
                <Text style={{ fontSize: 14, paddingTop: 5, color: '#E26F1E' }}>Experience:</Text>
                <TextInput
                    placeholder='Enter Your Experience'
                    style={{ height: 100, textAlign: 'justify', textAlignVertical: 'top', padding: 10, fontSize: 16, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                    multiline={true}
                    width={200}
                    numberOfLines={4}
                    returnKeyType='done'
                    color="#E26F1E"
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 40, marginTop: 60 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#E26F1E',
                        padding: 10,
                        width: 170,
                        borderRadius: 10
                    }}
                >
                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#ffff' }}> Update</Text>
                </TouchableOpacity>

            </View>
           
           </ScrollView>
        </View>
    );
};

