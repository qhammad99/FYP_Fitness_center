import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState, useContext } from 'react';
import {
    View, Text,
    TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, TextInput, Dimensions
} from 'react-native';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('screen')
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import { CoachContext } from '../../../Context/Providers/CoachProvider';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import userPhoto from '../../../Context/Actions/userPhoto';
import moment from 'moment';
import { URL } from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Urls from '../../../config/env';
import axios from 'axios';
import Colors from '../../../colors/Colors';
export default Home = (props) => {
    const authentication = useContext(AuthContext);
    const user = JSON.parse(authentication.state.user);
    const Coach = useContext(CoachContext);
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([])
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [exp, setExp] = useState(user?.coaching_experience)
    const [isLoading, setIsLoading] = useState(true);
    const [photoModal, setPhotoModal] = useState(false);


    const cameraPicker = () => {
        const options = {
            options: {
                mediaType: 'Photo'
            }
        };
        launchCamera(options, response => {
            if (!response.didCancel && !response.error)
                userPhoto(response.assets[0])(authentication);
        })
        setPhotoModal(false)
    }
    const galleryPicker = () => {
        const options = {
            options: {
                mediaType: 'Photo'
            }
        };
        launchImageLibrary(options, response => {
            if (!response.didCancel && !response.error)
                userPhoto(response.assets[0])(authentication);
        })
        setPhotoModal(false)
    }
    const addToLocatStorage = async (userObj) => {
        try {
            await AsyncStorage.setItem('USER', JSON.stringify(userObj));
        } catch (e) {
            console.log("error while storing in local storage, ", e);
        }
    }
    const updateUser = () => {
        if (name === "") {
            alert("Please enter your name")
            return
        }
        let data = {
            id: user.user_id,
            name: name
        }
        fetch(URL + "/user-edit", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': `application/json`,
            },
            body: JSON.stringify(data)
        })
            .then(async (res) => {
                // let re = await res.json()
                let newUser = { ...user, name: name }
                addToLocatStorage(newUser)
                authentication.dispatch({ type: 'SIGN_IN', payload: JSON.stringify(newUser) });
                alert('User Updated')
            })
    }
    return (

        <View style={{ flex: 1 }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E26F1E', paddingHorizontal: 20,
                paddingVertical: 10
            }}>
                <Modal
                    isVisible={photoModal}
                    animationIn={'bounceInUp'}
                    animationOut={'bounceOutDown'}
                    onBackButtonPress={() => setPhotoModal(false)}
                    onBackdropPress={() => setPhotoModal(false)}
                    style={{ margin: 0, justifyContent: 'flex-end' }}>
                    <View style={{
                        width: '100%',
                        height: 150,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.lightColor,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}
                    >
                        <TouchableOpacity onPress={cameraPicker}>
                            <Text style={{
                                color: Colors.selectedColor,
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>
                                Open Camera
                            </Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                height: 0.5,
                                width: '100%',
                                backgroundColor: Colors.lightDark,
                                marginVertical: 15
                            }}
                        />
                        <TouchableOpacity onPress={galleryPicker}>
                            <Text style={{
                                color: Colors.selectedColor,
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>
                                Choose From Gallery
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
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
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Profile</Text>
                <View />
            </View>
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, flexDirection: 'row' }}>
                    <Image
                        source={{ uri: URL + '/public/userImages/' + user.img_file }}
                        style={{
                            height: 100,
                            width: 100,
                            opacity: 100,
                            borderRadius: 50,
                            marginBottom: 10,
                        }}
                    />
                    <Ionicons name="camera-outline" size={20} style={{ paddingTop: 85 }} />
                </View>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 4,
                    alignSelf: 'center',
                    marginBottom: 15,

                }} onPress={() => setPhotoModal(true)}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: Colors.selectedColor
                    }}>Change Image</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 30 }}>
                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E' }}>Name</Text>
                    <TextInput
                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10, color: 'black' }}
                        width={200}
                        height={40}
                        placeholder='Enter Your Name'
                        color="#E26F1E"
                        value={name}
                        placeholderTextColor= 'grey'
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 20 }}>
                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E' }}>Email:</Text>
                    <TextInput
                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                        width={200}
                        height={40}
                        placeholderTextColor= 'grey'
                        placeholder='Enter Your Email'
                        color="#E26F1E"
                        value={email}
                        editable={false}
                    // onChangeText={(text)=>setName(text)}
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
                        placeholderTextColor= 'grey'
                        color="#E26F1E"
                        value={exp}
                        onChangeText={(text) => setExp(text)}
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
                        onPress={() => {
                            updateUser()
                        }}
                    >
                        <Text style={{ fontSize: 18, textAlign: 'center', color: '#ffff' }}> Update</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    );
};

