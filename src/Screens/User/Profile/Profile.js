import React,{useContext, useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {ParametersContext} from '../../../Context/Providers/ParametersProvider';
import {GoalContext} from '../../../Context/Providers/GoalProvider';
import getParameters from '../../../Context/Actions/getParameters';
import userPhoto from '../../../Context/Actions/userPhoto';
import Colors from '../../../colors/Colors';
import Modal from 'react-native-modal';
import styles from './styles';
import moment from 'moment';
import {URL} from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Profile = props =>{
    const authentication = useContext(AuthContext);
    const Parameters = useContext(ParametersContext);
    const Goal = useContext(GoalContext);
    const user = JSON.parse(authentication.state.user);

    const [isLoading, setIsLoading] = useState(true);
    const [photoModal, setPhotoModal] = useState(false);

    useEffect(()=>{
        if(Parameters.parameters.height == null)
            getParameters(Parameters)(authentication);
        else
            setIsLoading(false);
    },[Parameters, authentication])

    const cameraPicker = () =>{
        const options = {
            options:{
                mediaType: 'Photo'
            }
        };
        launchCamera(options, response=>{
            if(!response.didCancel && !response.error)
                userPhoto(response.assets[0])(authentication);
        })
        setPhotoModal(false)
    }  

    const galleryPicker = () =>{
        const options = {
            options:{
                mediaType: 'Photo'
            }
        };
        launchImageLibrary(options, response=>{
            if(!response.didCancel && !response.error)
                userPhoto(response.assets[0])(authentication);
        })
        setPhotoModal(false)
    }
    
    return(
        <View style={styles.container}>
            <Modal
                isVisible={isLoading}
                animationIn={'bounceInUp'}
                animationOut={'bounceOutDown'}
                style={{margin:0}}>
                    <View style={{
                        width:'100%', 
                        height: '100%', 
                        alignItems:'center',
                        justifyContent:'center'
                        }}
                    >
                        <ActivityIndicator size={50} color={Colors.primary}/>
                    </View>
                </Modal>

                {/* photo option modal */}
                <Modal
                    isVisible={photoModal}
                    animationIn={'bounceInUp'}
                    animationOut={'bounceOutDown'}
                    onBackButtonPress={()=>setPhotoModal(false)}
                    onBackdropPress={()=>setPhotoModal(false)}
                    style={{margin:0, justifyContent:'flex-end'}}>
                        <View style={{
                            width:'100%', 
                            height: 150, 
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:Colors.lightColor,
                            borderTopLeftRadius:10,
                            borderTopRightRadius:10
                            }}
                        >
                            <TouchableOpacity onPress={cameraPicker}>
                                <Text style={{
                                    color:Colors.selectedColor, 
                                    fontWeight:'bold',
                                    fontSize:16
                                }}>
                                    Open Camera
                                </Text>
                            </TouchableOpacity>
                            <View 
                                style={{
                                    height:0.5,
                                    width:'100%',
                                    backgroundColor:Colors.lightDark,
                                    marginVertical:15
                                }}
                            />
                            <TouchableOpacity onPress={galleryPicker}>
                                <Text style={{
                                    color:Colors.selectedColor, 
                                    fontWeight:'bold',
                                    fontSize:16
                                }}>
                                    Choose From Gallery
                                </Text>
                            </TouchableOpacity>
                        </View>
                </Modal>
        <ScrollView>
            <View style={styles.profileIconContainer}>
                <Image
                    source={{uri:URL+'/public/userImages/'+user.img_file}}
                    style={styles.profileIcon}
                />
            </View>

            <TouchableOpacity style={styles.changeImgBtnContainer} onPress={()=>setPhotoModal(true)}>
                <Text style={styles.changeImgBtnTxt}>Change Image</Text>
            </TouchableOpacity>
            
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>Name: </Text>
                <Text style={styles.itemContent}>{user.name}</Text>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>Email: </Text>
                <Text style={styles.itemContent}>{user.email}</Text>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>Gender: </Text>
                <Text style={styles.itemContent}>
                    {Parameters.parameters.gender == 1 ? "Male": "Female"}
                </Text>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>Weight: </Text>
                <Text style={styles.itemContent}>
                    {`${Parameters.parameters.weight} kg`}
                </Text>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>DOB: </Text>
                <Text style={styles.itemContent}>
                    {`${moment(Parameters.parameters.dob).local().format('DD MMM, YYYY')}`}
                </Text>
            </View>

            {
                Goal.goal.data.status == "inProgress"
                &&
                <View style={styles.itemContainer}>
                    <Text style={styles.itemLabel}>BMI: </Text>
                    <Text style={styles.itemContent}>
                        {Goal.goal.data.target_type}
                    </Text>
                </View>
            }

            {
                Goal.goal.data.status == "inProgress"
                &&
                <View style={styles.itemContainer}>
                    <Text style={styles.itemLabel}>Days: </Text>
                    <Text style={styles.itemContent}>
                        {Goal.goal.data.number_of_days}
                    </Text>
                </View>
            }
        </ScrollView>
        </View>
    );
};

export default Profile;