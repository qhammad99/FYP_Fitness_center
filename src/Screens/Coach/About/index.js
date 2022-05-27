import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, Modal, Dimensions, TextInput } from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import availableCoachs from '../../../Context/Actions/CoachSubscribedUser';
import { CoachContext } from '../../../Context/Providers/CoachProvider';
import moment from 'moment';
import { URL } from '@env';
const { height, width } = Dimensions.get('screen')

export default Home = (props) => {
    const authentication = useContext(AuthContext);
    const Coach = useContext(CoachContext);
    const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState("")
    const [userheight, setUserHeight] = useState("")
    const [userWeight, setUserWeight] = useState("")



    
    return (

        <SafeAreaView style={{ height: '100%' }}>

            <SafeAreaView style={{ backgroundColor: '#E26F1E' }} >
                <ScrollView style={{ padding: 20 }}>
                    <View>
                        <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center' }}>
                            <TouchableOpacity
                            onPress={()=>{
                                props.navigation.openDrawer()
                            }}
                            >
                                <Image
                                source={require('./../../../Assets/menu.png')}
                                style={{
                                    height:30,
                                    width:30,
                                    tintColor:'white'
                                }}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>About</Text>
                            <View/>
                        </View>
             
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
            <ScrollView>
            <View
            style={{
                padding:20
            }}
            ><Text style={{ color: 'black', fontSize: 14, }}>
Fitness Center is a health and fitness mobile app comppises of many activities to improve 
user’s fitness. It provides users with workout, AI based nutrition and Diet, goal and calorie 
tracking features to help them stay fit physically. It also connects the user with a coach focus
professional help.
                </Text></View>
               
            </ScrollView>
        </SafeAreaView>

    );
};

