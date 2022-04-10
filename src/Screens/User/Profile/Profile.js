import React,{useContext, useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import { ParametersContext } from '../../../Context/Providers/ParametersProvider';
import {GoalContext} from '../../../Context/Providers/GoalProvider';
import getParameters from '../../../Context/Actions/getParameters';
import Colors from '../../../colors/Colors';
import Modal from 'react-native-modal';
import styles from './styles';
import moment from 'moment';

const Profile = props =>{
    const authentication = useContext(AuthContext);
    const Parameters = useContext(ParametersContext);
    const Goal = useContext(GoalContext);
    const user = JSON.parse(authentication.state.user);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if(Parameters.parameters.height == null)
            getParameters(Parameters)(authentication);
        else
            setIsLoading(false);
    },[Parameters])

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
        <ScrollView>
            <View style={styles.profileIconContainer}>
                <Image
                    source={require('../../../images/userAvatar.png')}
                    style={styles.profileIcon}
                />
            </View>

            <TouchableOpacity style={styles.changeImgBtnContainer}>
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
                    {`${moment(Parameters.parameters.dob).local().format('DD-MM-YYYY')}`}
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