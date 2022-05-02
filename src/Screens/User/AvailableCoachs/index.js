import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TextInput, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import Colors from '../../../colors/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import CoachCard from '../../../components/CoachCard';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {CoachContext} from '../../../Context/Providers/CoachProvider';
import availableCoachs from '../../../Context/Actions/availableCoachs';
import { useIsFocused } from '@react-navigation/native';
import addMyCoach from '../../../Context/Actions/addMyCoach';
import moment  from 'moment';

const AvailableCoachs = () =>{
    const authentication = useContext(AuthContext);
    const Coach = useContext(CoachContext);

    const focused = useIsFocused();
    const [showModal, setShowModal] = useState(false);
    const [months, setMonths] = useState(0);
    const [selectedCoach, setSelectedCoach] = useState(null);

    useEffect(()=>{
        if(focused)
            availableCoachs(Coach)(authentication);
    },[focused]);

    const hiringPressed = coach=>{
        setSelectedCoach(coach);
        setShowModal(true);
    }

    const proceedPayment = ()=>{
        if(months!= 0){
            let days = months*30;
            let now = moment().local().format('YYYY-MM-DD');
            let expiry = moment().local().add(days, 'days').format('YYYY-MM-DD');
            
            let obj ={
                coach_id: selectedCoach.coach_id,
                payment_date: now,
                payment_expiry: expiry
            }

            addMyCoach(obj)(Coach)(authentication);
        }
            
    }

    return (
        <>
        {/* hiring payment modal */}
        <Modal
            isVisible={showModal}
            style={{margin:0, justifyContent:'flex-end'}}
            onBackButtonPress={()=>setShowModal(!showModal)}
            onBackdropPress={()=>setShowModal(!showModal)}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Subcription</Text>
                    <TextInput      
                        placeholder='Number of Months' 
                        style={styles.modalInput}
                        onChangeText={(text)=>setMonths(text)}
                        keyboardType={'numeric'}
                        />
                    <TouchableOpacity style={styles.buttonContainer} onPress={proceedPayment}>
                        <Text style={styles.buttonText}>Proceed</Text>
                    </TouchableOpacity>
                </View>
        </Modal>
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

        {Coach.state.availableCoachsLoading &&
            <View 
                style={{
                    width:'100%', 
                    height: '100%', 
                    alignItems:'center',
                    marginTop: 20
                    }}
            >
                <ActivityIndicator size={30} color={Colors.primary}/>
            </View>
        }
        {!Coach.state.availableCoachsLoading &&
        <View style={{ width: '100%', height: '100%'}}>
            {
                !Coach.state.availableCoachs.empty
                ?
                <FlatList 
                    data={Coach.state.availableCoachs}
                    renderItem={
                        ({item, index})=>
                            <CoachCard coach={item} onPress={hiringPressed}/>
                    }
                    keyExtractor={(item, index)=>`coach-${index}`}
                    ListFooterComponent={
                        <View style={{marginBottom:50}} />
                    }
                />
                :
                <Text>
                    No coach available
                </Text>
            }
        </View>
        }
        </>
    );
}

export default AvailableCoachs;