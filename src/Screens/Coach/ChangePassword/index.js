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




    useEffect(() => {
    }, [])

    const onChangePassword = () => {
        let passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (newPassword === "" || oldPassword === "" || confirmPassword === "") {
            alert('Please fill all fields')
        } else if (newPassword != confirmPassword) {
            alert("Password dont match")
        } else if (!passwordValidation.test(newPassword)) {
            alert("password must contain length of 6 to 20 and one number, one lower and one upper");
        } else {
            let user = JSON.parse(authentication.state.user)
            console.log(user.user_id)
            let token = user.token;
            var API_URL = Urls.user_change_password;
            axios.post(API_URL, {
                "userId": user.user_id,
                "oldPassword": oldPassword,
                "newPassword": newPassword
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((response) => {
                    if (response.data.success) {
                        // setShowModal(false)
                        setOldPassword("")
                        setNewPassword("")
                        setConfirmPassword("")
                        alert("Password Changed")
                    }
                    else
                        alert(response.data.message)
                })
                .catch((error) => {
                    if (error.response)
                        alert("as " + error.response.data.message);
                    else
                        alert("sa " + error);
                });
        }
    }
    return (

        <View style={{ flex: 1 }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E26F1E', paddingHorizontal: 20,
                paddingVertical: 10
            }}>
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
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Change Password</Text>
                <View />
            </View>
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        height: height * 0.5,
                        width: width,
                        // backgroundColor: 'white',
                        borderRadius: 10,
                        paddingHorizontal: 20
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Old Password</Text>
                        <TextInput
                            style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                            width={200}
                            height={40}
                            placeholder='Enter your old password'
                            color="#E26F1E"
                            value={oldPassword}
                            onChangeText={(text) => { setOldPassword(text) }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>New Password</Text>
                        <TextInput
                            style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                            width={200}
                            height={40}
                            placeholder='Enter your new password'
                            color="#E26F1E"
                            value={newPassword}
                            onChangeText={(text) => { setNewPassword(text) }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Confirm Password</Text>
                        <TextInput
                            style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10, }}
                            width={200}
                            height={40}
                            placeholder='Enter your new password'
                            color="#E26F1E"
                            value={confirmPassword}
                            onChangeText={(text) => { setConfirmPassword(text) }}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#E26F1E',
                            padding: 10,
                            width: 170,
                            borderRadius: 10,
                            alignSelf: 'center',
                            marginTop: 10
                        }}
                        onPress={() => {
                            onChangePassword()
                        }}
                    >
                        <Text style={{ fontSize: 18, textAlign: 'center', color: '#ffff' }}>Change</Text>
                    </TouchableOpacity>

                </View>




            </ScrollView>
            <Modal
                visible={showModal}
                transparent
            >
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                </View>
            </Modal>
        </View>
    );
};

