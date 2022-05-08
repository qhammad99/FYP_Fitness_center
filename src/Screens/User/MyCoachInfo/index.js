import React,{useContext, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import Colors from '../../../colors/Colors';
import styles from './styles';
import {CoachContext} from '../../../Context/Providers/CoachProvider';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {URL} from '@env';
import moment from 'moment';
import Rating from '../../../components/Rating';
import Modal from 'react-native-modal';
import Urls from '../../../config/env';
import axios from 'axios';

const MyCoachInfo = () =>{
    const {state:{coach: Coach}, dispatch} = useContext(CoachContext);
    const authentication = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [newRating, setNewRating] = useState(Coach.rating);
    const [isRated, setIsRated] = useState(Coach.is_rated);

    const rateNow = () =>{
        console.log(newRating);
        let user = JSON.parse(authentication.state.user);
        let token = user.token;

        var API_URL= Urls.GiveRating;
        axios.patch(API_URL, {
                coach_id : Coach.coach_id,
                rated_count : Coach.rated_count,
                avg_rating: Coach.avg_rating,
                rating: newRating
        },{
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((response)=>{
            if(response.data.success){
                setIsRated(1);
                setShowModal(false);
            }
        })
        .catch((error)=>{
        if(error.response)
            alert(" " + error.response.data.message);
        else
            alert(" "+ error);
        });
    }

    return (
        <>
        {/* rating modal */}
        <Modal
            isVisible={showModal}
            style={{margin:0, justifyContent:'flex-end'}}
            onBackButtonPress={()=>setShowModal(!showModal)}
            onBackdropPress={()=>setShowModal(!showModal)}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Rate your experience</Text>
                    <TextInput      
                        placeholder='Rating' 
                        style={styles.modalInput}
                        onChangeText={(text)=>setNewRating(text)}
                        keyboardType={'numeric'}
                        placeholderTextColor={Colors.lightDark}
                        />
                    <TouchableOpacity style={styles.buttonContainer} disabled={newRating <1.0 || newRating >5.0} onPress={rateNow}>
                        <Text style={styles.buttonText}>Rate</Text>
                    </TouchableOpacity>
                </View>
        </Modal>

        <View style={styles.root}>
        {/* search bar */}
        <View style={styles.header}>
            <Image
                source={{ uri: URL + '/public/userImages/' + Coach.img_file }}
                style={styles.profileIcon}
            />
            <Text style={styles.name}>{Coach.name}</Text>
        </View>
        <ScrollView style={styles.infoContainer}>
            <View style={styles.rowContainer}>
                <Text style={styles.label}>Experience:</Text>
                <Text style={styles.value}>{Coach.coaching_experience}</Text>
            </View>

            <View style={styles.rowContainer}>
                <Text style={styles.label}>Rating:</Text>
                <Text style={styles.value}>
                    <Rating rating={Coach.avg_rating} rated_count={Coach.rated_count} />
                </Text>
            </View>

            <View style={styles.rowContainer}>
                <Text style={styles.label}>Joined on:</Text>
                <Text style={styles.value}>{moment(Coach.joining_date).local().format('DD MMM, YYYY')}</Text>
            </View>

            <View style={styles.rowContainer}>
                <Text style={styles.label}>Payment Expiry:</Text>
                <Text style={styles.value}>{moment(Coach.payment_expiry).local().format('DD MMM, YYYY')}</Text>
            </View>

            {
                isRated != 0 &&
                <View style={styles.rowContainer}>
                    <Text style={styles.label}>You rated:</Text>
                    <Text style={styles.value}>{newRating}</Text>
                </View>
            }
            {
                isRated == 0 &&
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>setShowModal(true)}>
                    <Text style={styles.buttonText}>Rate now</Text>
                </TouchableOpacity>
            }
        </ScrollView>
        </View>
        </>
    );
}

export default MyCoachInfo;